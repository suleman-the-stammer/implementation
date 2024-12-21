const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to save seller data
app.post('/addSeller', (req, res) => {
    const { id, name, age, phone, password } = req.body;

    // Check if seller already exists in sellerdata.txt
    const sellerData = fs.readFileSync('server/sellerdata.txt', 'utf-8');
    if (sellerData.includes(`ID:${id}`)) {
        return res.status(400).send('Seller ID already exists.');
    }

    // Append seller details to sellerdata.txt
    const sellerInfo = `ID:${id}, Name:${name}, Age:${age}, Phone:${phone}\n`;
    fs.appendFileSync('server/sellerdata.txt', sellerInfo);

    // Append seller credentials to credentials.txt
    const credentials = `ID:${id}, Password:${password}\n`;
    fs.appendFileSync('server/credentials.txt', credentials);

    res.send('Seller added successfully!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
