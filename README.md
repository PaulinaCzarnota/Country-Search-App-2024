This repository contains a web-based Country Search Application that allows users to search for countries from a predefined list. Built with HTML, CSS, JavaScript, Node.js, and MySQL, it features real-time, case-insensitive search functionality and a user-friendly interface.

## Overview
The Country Search Application is a lightweight, responsive tool for quickly searching through a list of countries. Users can enter any part of a country name to get instant, accurate search results, thanks to a flexible matching system and seamless backend integration.

## Features
- **Case-Insensitive Search:** Searches ignore capitalization for ease of use.
- **Partial and Full Matching:** Supports both partial and complete country name matches.
- **Intuitive Interface:** A clean, simple layout designed for easy navigation and quick interactions.

## Technology Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (Express)
- **Database:** MySQL, managed through XAMPP and phpMyAdmin

## Database Setup
This application requires a MySQL database named `country_search`, with a table called `countries` that stores the country names. Follow these steps to set up the database:

### Instructions
1. **Start XAMPP:**
   - Open the XAMPP Control Panel and activate the Apache and MySQL services.

2. **Create the Database:**
   - In your browser, go to `http://localhost/phpmyadmin` and create a new database called `country_search`.

3. **Import SQL Data:**
   - With `country_search` selected, go to the "Import" tab, upload the included SQL dump file, and click "Go" to populate the `countries` table.

## Running the Application
1. **Start the Server:**
   - In your terminal, navigate to the project directory and run:
     ```bash
     node server.js
     ```

2. **Launch the Application:**
   - Open your browser and visit `http://localhost:3000` to access the app.

3. **Search for Countries:**
   - Enter any part of a country name in the search box. Results appear in real time, regardless of case.

## Project Structure
- **Frontend Files:** `index.html`, `styles.css`, `script.js`
- **Backend Files:** `server.js`
- **Database:** `country_search.sql` (SQL dump for initial setup)

## Future Improvements
- **Pagination:** To efficiently handle larger datasets.
- **Caching:** Reduces database load by storing frequent search results.
- **Enhanced Error Handling:** Provides better user feedback and debugging.

## Conclusion
The Country Search Application is a practical demonstration of integrating frontend and backend technologies to deliver an effective search experience. It’s a solid foundation for further feature additions and performance enhancements.
