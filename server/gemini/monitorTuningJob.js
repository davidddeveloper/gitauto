async function monitorTuningJob(operationId) {
    let tuningDone = false;
    while (!tuningDone) {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/${operationId}?key=` + process.env.GEMINI_API_KEY, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        if (data.metadata?.completedPercent) {
            console.log(`Tuning Progress: ${data.metadata.completedPercent}%`);
        }
        
        if (data.done) {
            tuningDone = true;
            console.log("Tuning job complete!", data.metadata.tunedModel);
            return data.metadata.tunedModel; // The tuned model ID
        }
        
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait before polling again
    }
}


module.exports = monitorTuningJob;