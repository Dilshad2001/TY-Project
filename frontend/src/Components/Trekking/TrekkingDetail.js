{/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Trekking.css';


import { packagesTrekking} from '../../Components/Trekking/TrekkingData';

const PackageDetail = () => {
    const { id } = useParams(); // Get the package ID from the URL
      // Combine all packages into a single array
      const allPackages = [
        ...packagesTrekking.map((item) => ({ ...item, type: 'trekking' })),

      ];
      const packageItem = allPackages.find((item) => item.id === parseInt(id));
     
      return (
        <div className="package-detail-container">
          {packageItem && (
            <>
            <h2>{packageItem.title}</h2>
          <img className="package-image" src={packageItem.image} alt={packageItem.title} />
          <div className="package-details">
            <div className="package-price">{packageItem.price}</div>
            <div className="package-grade">{packageItem.grade}</div>
            <div className="package-DifficultyLevel">{packageItem.DifficultyLevel}</div>
            <div className="package- DistanceCovered">{packageItem.DistanceCovered}</div>
            <div className="package-location">{packageItem.location}</div>
            <div className="package-itinerary">{packageItem.itinerary}</div>      
            <div className="package-description">{packageItem.description}</div>
            <div className="package-duration">{packageItem.duration}</div>
          </div>

          <div className="additional-details"> 
          {packageItem.details && (
            <>
            {renderDetails(packageItem.details)}
            </>
            )}
            </div>
          </>

          )}
    </div>
  );
};

export default PackageDetail;*/}