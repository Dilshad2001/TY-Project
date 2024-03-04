// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const Package = require('../models/packageModel'); // Update the path

// POST request to handle new booking submissions
router.post('/', async (req, res) => {
  try {
    const { title, name, email, numberOfPeople, packageTitle ,paymentAmount} = req.body;

    // Create a new package instance
    const newPackage = new Package({
      title,
      name,
      email,
      numberOfPeople,
      packageTitle,
      paymentAmount
    });

    // Save the package to the database
    await newPackage.save();

    res.status(201).json({ message: 'Booking submitted successfully!' });
  } catch (error) {
    console.error('Error submitting booking:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
