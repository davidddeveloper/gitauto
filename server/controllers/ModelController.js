const dotenv = require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const redisClient = require("../utils/redis")
const createTunedModel = require("../gemini/createTunedModel");
const monitorTunningJob = require("../gemini/monitorTuningJob");
const generateWithTunedModel = require("../gemini/generateWithTunedModel");
const { isAuthenticated } = require("./AuthController");
const { model } = require("../gemini/tuneModel");

const generateCommitMsg = async (req, res) => {
    // check if user is authenticated
    if (!isAuthenticated(req, res)) {
        return res.status(401).send({ error: "Unauthorized" });
    }
    // send request to gemeni
    // or create my own model
    const { body } = req;

    const gitStatus = body.git_status;
    const gitDiff = body.git_diff;

    if (!gitStatus || !gitDiff) return res.status(400).send({ error: 'Missing gitStatus or gitDiff' });

    //const operationId = await createTunedModel('gitauto');
    //const tunnedModelName = await monitorTunningJob(operationId);
    try {
        // check if there is a model in redis
        const tuned_model = await redisClient.client.get("tuned_model");
        if (!tuned_model) {
            return res.status(404).send({ error: "No tuned model found" });
        }

        // generate commit msg
        const commitMsg = await generateWithTunedModel(
            tuned_model, "On branch main\nChanges to be committed:\n  modified:   src/app.js\n\n diff --git a/styles/theme.css b/styles/theme.css\nindex abc123..def456 100644\n--- a/styles/theme.css\n+++ b/styles/theme.css\n@@ -10,7 +10,7 @@ body {\n-   background-color: #f5f5f5;\n+   background-color: #ffffff;\n}"
        );
    
        return res.status(200).send({message: commitMsg});

    } catch (error) {
        console.error("Error fetching tuned model:", error);
        return res.status(500).send({ error: "Internal server error" });
    }
    
}

const tuneModel = async (req, res) => {
    if (!isAuthenticated(req, res)) {
        return res.status(401).send({ error: "Unauthorized" });
    }
    const { body } = req;
    
    const modelName = body.name;

    if (!modelName) return res.status(401).send({"error": "Unauthorized"})
    console.log("We are here!", body, modelName)

    //optionally accept trained data in the form [{"input_text": "text", "output_text": "text"}]
    //const trainingData = req.data;
    
    const tunedModel = await model(modelName);
    //const expiration = 60 * 60 * 700; // 29d

    //redisClient.client.set(tunnedModel, user._id.toString(), 'EX', expiration)
    redisClient.client.set("tuned_model", tunedModel)
    .then(() => res.status(200).json({ "tuned_model": tunedModel }))
    .catch((err) => {console.log(err)
        res.status(500).send({ error: 'Internal error' })});;
}

module.exports = {
    generateCommitMsg,
    tuneModel
}