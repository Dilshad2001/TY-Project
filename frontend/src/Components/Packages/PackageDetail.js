// PackageDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { packagesData } from '../../Components/Packages/PackageData';


const PackageDetail = () => {
  const { id } = useParams(); // Get the package ID from the URL
  const packageItem = packagesData.find((item) => item.id === parseInt(id));

  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    monthOfTravel: '',
  });

  const [confirmationVisible, setConfirmationVisible] = useState(false);

  let totalAmount; // Declare totalAmount in the component's scope

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleBooking = () => {
    // Handle the booking logic, e.g., calculate total amount, show confirmation, etc.
    const totalAmount = packageItem.price * bookingInfo.numberOfPeople;

    // For simplicity, just logging the booking info in this example
    console.log('Booking Info:', bookingInfo);
    console.log('Total Amount:', totalAmount);
// Set the confirmation message visibility to true
    setConfirmationVisible(true);
  };

  return (
    <div className="package-detail-container">
      {packageItem && (
        <>
          <h2>{packageItem.title}</h2>
          <img
            className="package-image"
            src={packageItem.image}
            alt={packageItem.title}
          />
          <div className="package-details">
            <div className="package-price">{packageItem.price}</div>
            <div className="package-description">{packageItem.description}</div>
          </div>
          <div className="booking-form">
            <h3>Book this Package</h3>
            <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={bookingInfo.name}
                onChange={handleInputChange}
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={bookingInfo.email}
                onChange={handleInputChange}
              />
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={bookingInfo.phone}
                onChange={handleInputChange}
              />
              <label>Number of People:</label>
              <input
                type="number"
                name="numberOfPeople"
                value={bookingInfo.numberOfPeople}
                onChange={handleInputChange}
              />
              <label>Month of Travel:</label>
              <input
                type="text"
                name="monthOfTravel"
                value={bookingInfo.monthOfTravel}
                onChange={handleInputChange}
              />
              <button type="button" onClick={handleBooking}>
                Pay Now
              </button>
            </form>
          </div>
          {confirmationVisible && (
            <div className="confirmation-message">
              <p>Thank you for booking {packageItem.title}!</p>
              <p>Your booking details:</p>
              <p>Name: {bookingInfo.name}</p>
              <p>Email: {bookingInfo.email}</p>
              <p>Phone: {bookingInfo.phone}</p>
              <p>Number of People: {bookingInfo.numberOfPeople}</p>
              <p>Month of Travel: {bookingInfo.monthOfTravel}</p>
              <p>Total Amount: ${totalAmount}</p>
            </div>
            )}

        </>
      )}
    </div>
  );
};

export default PackageDetail;
