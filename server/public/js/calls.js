// login call /connect/
// calls.js

// Login Call
async function login(email, password) {
    // Encode email and password to Base64
    const credentials = btoa(`${email}:${password}`);
    
    try {
        const response = await fetch('/connect', {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);
            // Store JWT token or perform further actions
            return data.token;  // assuming JWT token is returned in "token" field
        } else {
            console.error('Login failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}

// Registration Call
async function register(username, email, password) {
    const payload = {
        username,
        email,
        password
    };
    
    try {
        const response = await fetch('/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('User registered successfully:', data);
            return data;  // data should include user details like id, email, and username
        } else {
            console.error('Registration failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
}
