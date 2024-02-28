import React, { useState } from 'react';

const BookingPage = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    trekkingPackage: '',
    paymentAmount: 100, // Dummy payment amount in RUPESS
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handlePayment = () => {
    // In a real application, you would integrate with a secure payment gateway here
    simulateEmailConfirmation(); // Simulate sending confirmation email
  };

  const simulateEmailConfirmation = () => {
    // Simulate sending a confirmation email using a dummy email API
    fetch('https://dummy-email-api.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: bookingDetails.email,
        subject: 'Trekking Adventure Booking Confirmation',
        body: `Dear ₹{bookingDetails.name},\n\nThank you for booking the ₹{bookingDetails.trekkingPackage} adventure! Your payment of $${bookingDetails.paymentAmount} has been received.\n\nEnjoy your trek!\n\nBest regards,\nThe Adventure Team`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Email confirmation sent:', data);
        alert('Payment successful! Confirmation email sent to your registered email.');
      })
      .catch((error) => {
        console.error('Error sending email confirmation:', error);
        alert('Payment successful! Unable to send confirmation email at the moment.');
      });
  };

  return (
    <div>
      <h2>Best Book Now for Your Adventure</h2>
      <form>
        {/* ... (unchanged form fields) */}
        <button type="button" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
