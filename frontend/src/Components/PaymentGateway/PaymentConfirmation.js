import React from 'react';
import './PaymentConfirmation.css'; // Import your CSS styles for the payment confirmation

const PaymentConfirmation = () => {
  return (
    <div className="confirmation-container">
      <h2>Payment Confirmation</h2>
      <div className="confirmation-message">
        <p>Thank you for your payment!</p>
        <p>Your payment has been successfully processed.</p>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
