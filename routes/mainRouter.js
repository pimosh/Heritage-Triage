// routes/indexRoutes.js

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/mainController');

// Route for the index page
router.get('/', indexController.getIndexPage);

module.exports = router;
