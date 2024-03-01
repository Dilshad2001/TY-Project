import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookNow.css'

const BookNow = () => {
  const location = useLocation();
  const { bookingInfo, calculatedTotalAmount,simplifiedPackageItem} = location.state || {};

  useEffect(() => {
    console.log('Booking Info:', bookingInfo);
    console.log('Total Amount:', calculatedTotalAmount);
    console.log('PaymentItem',simplifiedPackageItem)
  }, [bookingInfo, calculatedTotalAmount,simplifiedPackageItem]);

  const [bookingDetails, setBookingDetails] = useState({
    paymentAmount: calculatedTotalAmount || 0, // Use the passed totalAmount or default to 0
    paymentStatus: false, // Track payment status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handlePayment = () => {
    // In a real application, you would integrate with a secure payment gateway here
    simulateEmailConfirmation(); // Simulate sending confirmation email
  };

  const simulatePaymentConfirmation = () => {
    // Simulate processing payment using a dummy payment API
    // Assuming payment is successful, update payment status and send email confirmation
    setBookingDetails((prevDetails) => ({ ...prevDetails, paymentStatus: true }));
    simulateEmailConfirmation();
    simulateEmailConfirmation();
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
        body: `Dear ${bookingDetails.name},\n\nThank you for booking the ${bookingDetails.trekkingPackage} adventure! Your payment of $${bookingDetails.paymentAmount} has been received.\n\nEnjoy your trek!\n\nBest regards,\nThe Adventure Team`,
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
      <h2>Complete Your Adventure Booking</h2>
      <form>
        {/* Display the received package details */}
        {simplifiedPackageItem ? (
          <>
        <h3>Package Details:</h3>
        <p>Title: {simplifiedPackageItem.title}</p>
        {/* Add other package details as needed */}
        </>
        ) : null}
        {/* Allow user to update their details if needed */}
        <h3>Your Details:</h3>
        <p>Name: {bookingInfo.name}</p>

        <p>Email: {bookingInfo.email}</p>
        <label>Package:</label>
        <input
          type="text"
          name="trekkingPackage"
          value={bookingDetails.trekkingPackage || (simplifiedPackageItem ? simplifiedPackageItem.title : '')}
          readOnly
        />

        <label>Total Amount:</label>
        <input
          type="number"
          name="paymentAmount"
          value={bookingDetails.paymentAmount}
          readOnly
        />

        <button type="button" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </form>

      {bookingDetails.paymentStatus && (
        <div>
          <p>Payment Successful! Confirmation details sent to your email and phone.</p>
        </div>
      )}
    </div>
  );
};
  

export default BookNow;
