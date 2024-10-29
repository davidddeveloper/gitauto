const fetch = require('node-fetch');
const trainingData = require('./trainingData');

async function createTunedModel(display_name) {
    const requestBody = {
        display_name,
        base_model: "models/gemini-1.5-flash-001-tuning",
        tuning_task: {
            hyperparameters: {
                batch_size: 2,
                learning_rate: 0.001,
                epoch_count: 5,
            },
            training_data: {
                examples: {
                    examples: trainingData
                }
            }
        }
    };

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/tunedModels?key=" + process.env.GEMINI_API_KEY, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    if (response.ok) {
        console.log("Tuning job created successfully:", data);
        return data.name; // The tuning operation ID
    } else {
        throw new Error(`Error creating tuning job: ${data.error.message}`);
    }
}

module.exports = createTunedModel;