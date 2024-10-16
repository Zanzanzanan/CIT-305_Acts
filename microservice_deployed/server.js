// app.js
const express = require('express');
const bodyParser = require('body-parser');
const jsonData = require('./jsonData');  // Assuming jsonData.js contains your JSON data
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Route for JSON response
app.get('/api/json', (req, res) => {
  res.json(jsonData);  // Sends the JSON data as response
});

// Start the server
app.listen(port, () => {
  console.log(`Microservice running at http://localhost:${port}`);
});
