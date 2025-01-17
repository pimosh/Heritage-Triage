const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRouter'); // Import your routes

const app = express();
const PORT = 4000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for EJS templates (default is './views')
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (for your CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', mainRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
