const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');
const authenticateUser = require('../Middlewares/authMiddleware'); // Import the authentication middleware

const router = express.Router();

// Route for user registration (POST request to root path '/')
router.route('/frontend/src/Components/Authentication/SignUp').post(registerUser);

// Route for user login (POST request to '/login' path)
router.post('/frontend/src/Components/Authentication/Login', loginUser);

// Public route accessible to all
router.get('/frontend/src/Components/Main Home/home', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Protected route - requires authentication
router.get('/packages', authenticateUser, (req, res) => {
  res.send('Explore Our Packages!');
});

// Protected route - requires authentication
router.get('/book-now', authenticateUser, (req, res) => {
  res.send('Book Now for an Amazing Adventure!');
});

module.exports = router;
