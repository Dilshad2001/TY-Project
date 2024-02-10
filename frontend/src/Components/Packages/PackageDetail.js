// PackageDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PackageDetail.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import { packagesTravlling, packagesRafting, packagesTrekking, packagesHotels} from '../../Components/Packages/PackageData';


const PackageDetail = () => {
  const { id } = useParams(); // Get the package ID from the URL
    // Combine all packages into a single array
    const allPackages = [
      ...packagesTravlling.map((item) => ({ ...item, type: 'travelling' })),
      ...packagesRafting.map((item) => ({ ...item, type: 'rafting' })),
      ...packagesTrekking.map((item) => ({ ...item, type: 'trekking' })),
      ...packagesHotels.map((item) => ({ ...item, type: 'hotels' })),
    ];
  const packageItem = allPackages.find((item) => item.id === parseInt(id));

  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    monthOfTravel: '',
  });

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0); // Declare totalAmount in the component's state

  //let totalAmount =0; // Declare totalAmount in the component's scope

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleBooking = () => {
     // Form validation
     if (!bookingInfo.name || !bookingInfo.email || !bookingInfo.phone || !bookingInfo.monthOfTravel) {
      alert('Please fill in all the required fields.');
      return;
    }
    const calculatedTotalAmount = packageItem.price * bookingInfo.numberOfPeople;
    setTotalAmount(calculatedTotalAmount);

    // Display the confirmation message
      setConfirmationVisible(true);
    };
  
    const closeConfirmation = () => {
      // Close the confirmation message
      setConfirmationVisible(false);
    };
    const handleDateChange = (date) => {
      // Your validation logic here to check if the date is within the next 15 days
      const currentDate = new Date();
      const fifteenDaysFromNow = new Date();
      fifteenDaysFromNow.setDate(currentDate.getDate() + 15);

      if (date >= currentDate && date <= fifteenDaysFromNow) {
        setBookingInfo((prevInfo) => ({ ...prevInfo, monthOfTravel: date }));
      } else {
        // Handle invalid date (show error message, etc.)
        console.error('Invalid date selection');
      }
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
            <div className="package-location">{packageItem.location}</div>
            <div className="package-itinerary">{packageItem.itinerary}</div>
            
            <div className="package-description">{packageItem.description}</div>
            <div className="package-duration">{packageItem.duration}</div>
          
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
              
                  <div className="date-picker-container">
                <label>Month of Travel:</label>
                <DatePicker
                  selected={bookingInfo.monthOfTravel}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  maxDate={new Date(new Date().setDate(new Date().getDate() + 15))}
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <button type="button" onClick={handleBooking}>
                RegisterNow
              </button>
            </form>
          </div>
          <div className="confirmation-message" style={{ display: confirmationVisible ? 'block' : 'none' }}>
              <p>Thank you for booking {packageItem.title}!</p>
              <p>Your booking details:</p>
              <p>Name: {bookingInfo.name}</p>
              <p>Email: {bookingInfo.email}</p>
              <p>Phone: {bookingInfo.phone}</p>
              <p>Number of People: {bookingInfo.numberOfPeople}</p>
              <p>Month of Travel: {bookingInfo.monthOfTravel}</p>
              <p>Total Amount: ₹{totalAmount}</p>
              <button type="button" onClick={closeConfirmation}>
              Close
            </button>
            </div>
        </>
      )}
    </div>
  );
};

export default PackageDetail;
