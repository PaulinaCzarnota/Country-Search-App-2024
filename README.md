This repository contains a web-based **Country Search Application** that allows users to search for countries from a predefined list. Built with HTML, CSS, JavaScript, Node.js, and MySQL, it features real-time, case-insensitive search functionality and a user-friendly interface.

## Overview

The Country Search Application is a lightweight, responsive tool designed for quickly searching through a list of countries. Users can enter any part of a country name to receive instant, accurate search results, thanks to a flexible matching system and seamless backend integration.

## Features

- **Case-Insensitive Search:** Searches ignore capitalization for ease of use.
- **Partial and Full Matching:** Supports both partial and complete country name matches (e.g., searching for "united" will return both "United States of America" and "United Kingdom").
- **Responsive Design:** The interface is optimized for different screen sizes.
- **Real-time Interaction:** The application leverages a request-response model, ensuring seamless interaction between the frontend and backend.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (Express)
- **Database:** MySQL, managed through XAMPP and phpMyAdmin

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js:** Download and install from [nodejs.org](https://nodejs.org/).
- **XAMPP:** Download and install from [apachefriends.org](https://www.apachefriends.org/index.html) to manage the MySQL database.

## Database Setup

This application requires a MySQL database named `country_search`, which contains a table called `countries` to store the country names. The list of countries includes:

- Albania
- Andorra
- Australia
- Brazil
- Belgium
- Canada
- China
- France
- Germany
- India
- Indonesia
- Ireland
- Italy
- Japan
- Kenya
- Luxembourg
- Mexico
- New Zealand
- Nigeria
- Portugal
- Russia
- South Africa
- South Korea
- Spain
- Sweden
- Thailand
- Ukraine
- United Kingdom
- United States of America
- Vietnam
- Zambia

### Instructions

1. **Start XAMPP:**
   - Open the XAMPP Control Panel and activate the Apache and MySQL services.

2. **Create the Database:**
   - In your browser, go to `http://localhost/phpmyadmin` and create a new database called `country_search`.

3. **Import SQL Data:**
   - With `country_search` selected, go to the "Import" tab, upload the included SQL dump file (`countries.sql`), and click "Go" to populate the `countries` table.

## Running the Application

1. **Start the Server:**
   - Open your terminal or command prompt, navigate to the project directory, and run:
     ```bash
     cd <directory_name>
     node server.js
     ```

2. **Launch the Application:**
   - Open your browser and navigate to `http://localhost:3000` to access the application.

3. **Search for Countries:**
   - Enter any part of a country name in the search box. Results will appear in real time, regardless of case.

## Project Structure

- **Frontend Files:** `index.html`, `styles.css`, `script.js`
- **Backend Files:** `server.js`
- **Database Setup File:** `countries.sql` (SQL dump for initial setup)

## Technical Choices

- **Frontend:** I chose HTML, CSS, and JavaScript for the frontend due to their simplicity, ease of use, and fast rendering in modern browsers. JavaScript is used for the real-time search feature.
- **Backend:** Node.js (with Express) was selected for the backend due to its non-blocking architecture and efficiency in handling multiple requests.
- **Database:** MySQL was used to store the list of countries because it's a reliable relational database that integrates well with XAMPP for local testing.

## Future Improvements

- **Pagination:** Implement pagination to efficiently handle larger datasets.
- **Caching:** Introduce caching mechanisms to reduce database load by storing frequently accessed search results.
- **Enhanced Error Handling:** Improve user feedback for database or server errors and enhance debugging tools.
- **Search Optimization:** Implement fuzzy search algorithms to provide more flexible results, especially for misspelled queries.

## Conclusion

The Country Search Application is a practical demonstration of integrating frontend and backend technologies to deliver an effective search experience. It serves as a solid foundation for future feature additions and performance enhancements. 