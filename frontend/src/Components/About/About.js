import React from 'react';
import './About.css'
const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ShaikhTravels</h1>
          <p>Your Gateway to Unforgettable Journeys</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At ShaikhTravels , we believe in the transformative power of travel and the thrill of exploration.
            Our mission is to inspire and guide adventurers, nature enthusiasts, and thrill-seekers to embark on
            unforgettable journeys, connecting with the world's most breathtaking landscapes.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-content">
          <h2>Meet Our Team</h2>
          <p>
            Our team of passionate explorers and seasoned guides is dedicated to curating exceptional travel
            experiences. With expertise in trekking, mountaineering, and cultural exploration, we ensure every
            adventure is not only thrilling but also safe and enriching.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="values-content">
          <h2>Our Values</h2>
          <ul>
            <li>  Passion for Adventure</li>
            <li>  Respect for Nature and Local Cultures</li>
            <li>  Commitment to Safety</li>
            <li>  Sustainability and Eco-Friendly Practices</li>
            <li>  Customer-Centric Approach</li>
          </ul>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance in planning your next adventure? Feel free to reach out to us.
            We're here to help you make your travel dreams a reality.
          </p>
          <p>Email: ShaikhTravels786@gmail.com</p>
          <p>Phone: +91 9987843882 </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
