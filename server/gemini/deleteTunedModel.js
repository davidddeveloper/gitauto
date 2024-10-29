async function deleteTunedModel(modelName) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${modelName}?key=` + process.env.GEMINI_API_KEY, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        console.log("Model deleted successfully");
    } else {
        const data = await response.json();
        throw new Error(`Error deleting model: ${data.error.message}`);
    }
}


module.exports = deleteTunedModel;