const express = require('express');
const session = require('express-session');
const cors = require('cors');
const connectDB = require('./data/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();

const app = express();

// Use CORS middleware before setting up routes
app.use(cors());

// Use sessions for user persistence
app.use(session({
  secret: '1234567', // Replace with a strong, unique key
  resave: true,
  saveUninitialized: true,
}));

app.use(express.json()); 
app.use("/api/user", userRoutes);
app.use('/api/bookings', bookingRoutes);

// Handle favicon request
app.get('/favicon.ico', (req, res) => res.status(204));

// Home page visible to all
app.get('/frontend/src/Components/Main Home/home', (req, res) => {
  res.send("This is the home page. Everyone can see this!");
});

// Login page visible only if the user is not logged in
app.get('/frontend/src/Components/Authentication/Login', (req, res) => {
  if (!req.session.user) {
    res.send("This is the login page. Only visible when not logged in.");
  } else {
    // Redirect to the home page if the user is already logged in
    res.redirect('/');
  }
});

// Database
connectDB();

// Use environment variables
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
