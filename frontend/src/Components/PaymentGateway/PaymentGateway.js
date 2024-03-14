import React, { useState } from 'react';
import './PaymentGateway.css'; // Import your CSS styles for the payment gateway

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Validate input fields (cardNumber, expiry, cvv) before processing payment

    // Dummy payment processing logic
    console.log('Processing payment...');
    // After processing payment, you can redirect the user back to a confirmation page
    window.location.href = '/confirmation';
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment Gateway</h2>
      <div className="payment-form">
        <label>Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter your card number"
        />
        <label>Expiration Date:</label>
        <input
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YY"
        />
        <label>CVV:</label>
        <input
          type="password"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Enter CVV"
        />
        <button onClick={handlePayment}>Make Payment</button>
      </div>
    </div>
  );
};

export default PaymentGateway;
