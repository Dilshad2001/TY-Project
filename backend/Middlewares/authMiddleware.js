// middleware/authMiddleware.js
const authenticateUser = (req, res, next) => {
    // Check if the user is logged in
    if (req.session && req.session.user) {
      // User is logged in, proceed to the next middleware or route
      next();
    } else {
      // User is not logged in, redirect to the login page
      res.redirect('/frontend/src/Components/Authentication/Login'); // Update the route according to your project structure
    }
  };
  
  module.exports = authenticateUser;
  