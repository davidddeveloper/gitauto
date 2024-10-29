async function generateWithTunedModel(modelName, inputText) {
    const requestBody = {
        contents: [{
            parts: [{ text: inputText }]
        }]
    };

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=` + process.env.GEMINI_API_KEY, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    });

    console.log(response)

    const data = await response.json();
    if (response.ok) {
        console.log("Generated text:", data.candidates[0].content.parts[0].text);
        contents = data.candidates[0].content.parts[0].text;
        return contents;
    } else {
        throw new Error(`Error generating content: ${data.error.message}`);
    }
}


module.exports = generateWithTunedModel;