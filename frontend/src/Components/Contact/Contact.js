import React from 'react';
import './Contact.css'
const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Have questions or need assistance? We're here to help you!</p>
        </div>
      </section>

      <section className="contact-form">
        <div className="form-container">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section className="contact-info">
        <div className="info-container">
          <h2>Visit Us</h2>
          <p>ShaikhTravels Headquarters</p>
          <p>Gateway of India, Mumbai</p>
          <p>Maharashtra, 40001</p>

          <h2>Contact Information</h2>
          <p>Email: ShaikhTravels786@gmail.com</p>
          <p>Phone: +91 9987843882 </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
