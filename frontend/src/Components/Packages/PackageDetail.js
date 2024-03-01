// PackageDetail.js
import React, { useState } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import "./PackageDetail.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  packagesTravelling,
  packagesRafting,
  packagesTrekking,
  packagesHotels,
  packagesBus,
  packagesTrain,
  packagesFlight,
} from "../../Components/Packages/PackageData";

const renderDetails = (details) => {
  return details.map((detail, index) => (
    <div key={index}>
      {detail.day && (
        <div>
          <strong>Day:</strong> {detail.day}
        </div>
      )}
      {detail.details && (
        <div>
          <strong>Details:</strong>{" "}
          {Array.isArray(detail.details)
            ? renderDetails(detail.details)
            : detail.details}
        </div>
      )}
    </div>
  ));
};

const PackageDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const fifteenDaysFromNow = new Date();
  fifteenDaysFromNow.setDate(fifteenDaysFromNow.getDate() + 15);

  const allPackages = [
    ...packagesTravelling.map((item) => ({ ...item, type: "travelling" })),
    ...packagesRafting.map((item) => ({ ...item, type: "rafting" })),
    ...packagesTrekking.map((item) => ({ ...item, type: "trekking" })),
    ...packagesHotels.map((item) => ({ ...item, type: "hotels" })),
    ...packagesBus.map((item) => ({ ...item, type: "Bus" })),
    ...packagesTrain.map((item) => ({ ...item, type: "Train" })),
    ...packagesFlight.map((item) => ({ ...item, type: "Flight" })),
  ];
  const packageItem = allPackages.find((item) => item.id === parseInt(id));

  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople:"",
    monthOfTravel: "",

  });

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0); // Declare totalAmount in the component's state

  //let totalAmount =0; // Declare totalAmount in the component's scope

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleBooking = () => {
    if (!isValidInput()) {
      alert('Please fill in all the required fields correctly.');
      return;
    }
    if (!packageItem || !packageItem.price) {
      alert('Invalid package details. Please check the price.');
      return;
    }
    const priceof = parseInt(packageItem.price);
    console.log(priceof)
    const numberOfPeople = parseInt(bookingInfo.numberOfPeople);

    console.log('packageItem:', packageItem);
    console.log('price:', priceof);
    console.log('numberOfPeople:', numberOfPeople);
    

    if ( packageItem.price <= 0 || numberOfPeople <= 0) {
      alert('Invalid package details. Please check the price and number of people.');
      return;
    }
    
    const calculatedTotalAmount = priceof*numberOfPeople;

    if (isNaN(calculatedTotalAmount)) {
      alert('Invalid calculation. Please check package details.');
      return;
    }

    console.log('calculatedTotalAmount:', calculatedTotalAmount);

    const simplifiedPackageItem = {
      id: packageItem.id,
      price: packageItem.price,
      location: packageItem.location,
      title: packageItem.title,
      grade: packageItem.grade,
      duration: packageItem.duration

      // Add other necessary properties
    };

    console.log(simplifiedPackageItem)
    setTotalAmount(calculatedTotalAmount); 
    setConfirmationVisible(true);
    navigate(`/Book-Now`, { state: { bookingInfo, calculatedTotalAmount,numberOfPeople, simplifiedPackageItem } });
  };
  

  const closeConfirmation = () => {
    setConfirmationVisible(false);
  };
  const handleDateChange = (date) => {
    const currentDate = new Date();
    

    if (date >= currentDate && date <= fifteenDaysFromNow) {
      // Convert the date to a string before storing it in state
      const formattedDate = date.toISOString().split("T")[0];
      setBookingInfo((prevInfo) => ({
        ...prevInfo,
        monthOfTravel: formattedDate,
      }));
    } else {
      console.error("Invalid date selection");
    }
  };
  const isValidInput = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(bookingInfo.email);

    // Simple phone number validation (10 digits)
    const validPhone = /^\d{10}$/.test(bookingInfo.phone);

    // Number of people should be between 1 and 20
    const validNumberOfPeople =
      bookingInfo.numberOfPeople >= 1 && bookingInfo.numberOfPeople <= 20;

    // Name should not contain numbers
    const validName = /^[^\d]+$/.test(bookingInfo.name);

    return validEmail && validPhone && validNumberOfPeople && validName;
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
            <div className="package-grade">{packageItem.grade}</div>
            <div className="package-DifficultyLevel">{packageItem.DifficultyLevel}</div>
            <div className="package- DistanceCovered">{packageItem.DistanceCovered}</div>
            <div className="package-location">{packageItem.location}</div>
            <div className="package-description">{packageItem.description}</div>
            <div className="package-Itinerary">{packageItem.Itinerary}</div>
            <div className="package-Package Inclusions">{packageItem.PackageInclusion}</div>
            <div className="package-Package Price">{packageItem.PackagePrice}</div>
            <div className="package-Note">{packageItem.Note}</div>
            <div className="package-duration">{packageItem.duration}</div>
          </div>

          <div className="additional-details">
            {packageItem.details && <>{renderDetails(packageItem.details)}</>}
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
                  selected={bookingInfo.monthOfTravel ? new Date(bookingInfo.monthOfTravel): null}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  maxDate={fifteenDaysFromNow}
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <button type="button" onClick={handleBooking}>
                RegisterNow
              </button>
            </form>
          </div>
          <div
            className="confirmation-message"
            style={{ display: confirmationVisible ? "block" : "none" }}
          >
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
