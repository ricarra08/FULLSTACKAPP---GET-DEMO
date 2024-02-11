
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Add the following import at the top of the file
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Global variable for storage
let data = [];

app.get('/', (req, res) => {
    res.send('Hey Ric, did you eat?');
});

// Route for accepting POST request and adding data to the global variable
app.post('/data', (req, res) => {
    console.log(req.body);
    const newData = req.body;
    data.push(newData);
    res.send('Data added successfully!');
});

// Route for sending the global variable as a response
app.get('/data', (req, res) => {
    res.json(data);
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


