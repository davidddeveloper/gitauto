const createTunedModel = require("./createTunedModel");
const monitorTuningJob = require("./monitorTuningJob");

const model = async (modelName) => {
    try {
        const operationId = await createTunedModel(modelName);
        return await monitorTuningJob(operationId);

    } catch (error) {
        console.error("An error occurred:", error);
        return false;
    }
};

module.exports = {
    model
};