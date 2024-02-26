import React, { useState } from 'react';

const BookNowPage = () => {
  const [bookingDetails, setBookingDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    numberOfParticipants: 1,
    selectedPackage: '',
    additionalComments: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here
    console.log('Booking submitted:', bookingDetails);
    // You can redirect the user, show a confirmation message, or perform other actions after submission
  };

  return (
    <div className="book-now-page">
      <section className="booking-form">
        <div className="form-container">
          <h1>Book Your Adventure</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={bookingDetails.fullName}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={bookingDetails.phoneNumber}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="numberOfParticipants">Number of Participants:</label>
            <input
              type="number"
              id="numberOfParticipants"
              name="numberOfParticipants"
              value={bookingDetails.numberOfParticipants}
              onChange={handleInputChange}
              min="1"
              required
            />

            <label htmlFor="selectedPackage">Select Package:</label>
            <select
              id="selectedPackage"
              name="selectedPackage"
              value={bookingDetails.selectedPackage}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Package</option>
              <option value="basic">Basic Adventure</option>
              <option value="premium">Premium Expedition</option>
              {/* Add more options as needed */}
            </select>

            <label htmlFor="additionalComments">Additional Comments:</label>
            <textarea
              id="additionalComments"
              name="additionalComments"
              value={bookingDetails.additionalComments}
              onChange={handleInputChange}
              rows="4"
            ></textarea>

            <button type="submit">Book Now</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookNowPage;
