// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', async () => {
    const searchInput = document.getElementById('searchInput').value.trim(); // Get user input

    // Clear previous results
    document.getElementById('resultsContainer').innerHTML = '';

    // Validate input
    if (searchInput.length < 2) { // Check for minimum input length
        document.getElementById('resultsContainer').innerHTML = '<p>Please enter at least 2 characters.</p>'; // Display warning message
        return; // Exit if validation fails
    }

    try {
        // Fetch search results from the backend
        const response = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(searchInput)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle network errors
        }

        const results = await response.json(); // Parse JSON response

        // Check if there are no results
        if (results.length === 0) {
            document.getElementById('resultsContainer').innerHTML = '<p>No results found.</p>'; // Display no results message
        } else {
            // Display results
            results.forEach(country => {
                const resultDiv = document.createElement('div'); // Create a new div for each result
                resultDiv.classList.add('result'); // Add result class for styling
                resultDiv.textContent = country; // Set the text to the country name
                document.getElementById('resultsContainer').appendChild(resultDiv); // Append to results container
            });
        }
    } catch (error) {
        console.error('Error fetching the search results:', error); // Log errors to the console
        document.getElementById('resultsContainer').innerHTML = '<p>Error fetching results. Please try again.</p>'; // Display error message
    }
});

// Fetch and display all countries on initial load
window.onload = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/countries'); // Fetch all countries
        const countries = await response.json(); // Parse JSON response

        // Populate results container with country names
        countries.forEach(country => {
            const resultDiv = document.createElement('div'); // Create a new div for each country
            resultDiv.classList.add('result'); // Add result class for styling
            resultDiv.textContent = country; // Set the text to the country name
            document.getElementById('resultsContainer').appendChild(resultDiv); // Append to results container
        });
    } catch (error) {
        console.error('Error fetching countries:', error); // Log errors to the console
    }
};
