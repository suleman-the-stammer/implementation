const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Login verification endpoint
app.post('/verify-login', (req, res) => {
    const { username, password, role } = req.body;

    // Read credentials from the file
    const credentials = fs.readFileSync('server/credentials.txt', 'utf-8').split('\n');

    // Check if username and password exist in the credentials file
    const isValid = credentials.some(line => {
        const [storedUsername, storedPassword] = line.split(', ').map(part => part.split(':')[1]);
        return storedUsername === username && storedPassword === password && role === 'seller';
    });

    if (isValid) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username, password, or role.');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
