const express = require('express'); // Import Express framework
const mysql = require('mysql'); // Import MySQL module
const cors = require('cors'); // Import CORS middleware

const app = express(); // Create an Express application
const port = 3000; // Define the server port

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies for incoming requests

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost', // Database host
    user: 'root', // Database user
    password: '', // Database password
    database: 'country_search' // Database name
});

// Connect to MySQL database
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err); // Log connection errors
        return;
    }
    console.log('Connected to the database.'); // Log successful connection
});

// Endpoint to get all countries
app.get('/api/countries', (req, res) => {
    db.query('SELECT name FROM countries', (err, results) => { // Query to get country names
        if (err) {
            console.error('Error fetching countries:', err); // Log errors
            return res.status(500).send('Server error'); // Send server error response
        }
        res.json(results.map(row => row.name)); // Send the list of country names as JSON
    });
});

// Endpoint to search for countries based on a query
app.get('/api/search', (req, res) => {
    const query = req.query.q; // Get search query from request parameters
    const sql = 'SELECT name FROM countries WHERE name LIKE ?'; // SQL query for searching
    db.query(sql, [`%${query}%`], (err, results) => { // Execute the query with wildcard search
        if (err) {
            console.error('Error searching countries:', err); // Log errors
            return res.status(500).send('Server error'); // Send server error response
        }
        res.json(results.map(row => row.name)); // Send search results as JSON
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log server status
});
