// Packages.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


import './Package.css'; // Import the specific CSS file for Packages
import img from '../../Assets/Packeges Assets/Rafting Kullu.jpg'

const packagesData = [
  {
    id: 1,
    title: 'Adventures Rafting in Kullu',
    image: img, // Use the imported image
    price: '$999',
    description: 'Explore the depths of rever and experience thrilling adventures.',
  },
  {
    id: 2,
    title: 'Beach Paradise Getaway',
    image: 'package2.jpg',
    price: '$1200',
    description: 'Relax and unwind on the sandy beaches with crystal-clear waters.',
  },
  // Add more packages as needed
];

const Packages = () => {
  return (
    <div className="packages-container">
      {packagesData.map((packageItem) => (
        <Link to={`/package/${packageItem.id}`} key={packageItem.id}>

        <div className="package-card" key={packageItem.id}>
          <img
            className="package-image"
            src={packageItem.image}
            alt={packageItem.title}
          />
          <div className="package-details">
            <div className="package-title">{packageItem.title}</div>
            <div className="package-price">{packageItem.price}</div>
            <div className="package-description">{packageItem.description}</div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Packages;
