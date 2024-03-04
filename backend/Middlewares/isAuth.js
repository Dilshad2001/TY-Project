const jwt = require('jsonwebtoken');
const AsyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const isAuthenticated = AsyncHandler(async (req, res, next) => {
  try {
    let token;

    // Check if the Authorization header exists and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Extract the token from the Authorization header
      token = req.headers.authorization.split(' ')[1];
    }

    // Check if a token exists
    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }

    // Verify the token and decode the user information
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user based on the decoded user ID
    const user = await User.findById(decoded.id);

    // Check if the user exists
    if (!user) {
      res.status(401);
      throw new Error('Not authorized, user not found');
    }

    // Set req.user with the user information
    req.user = user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ error: 'Not authorized, token failed' });
  }
});

module.exports = isAuthenticated;
