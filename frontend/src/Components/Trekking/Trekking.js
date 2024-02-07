import React from 'react';
import { Link } from 'react-router-dom';
import './Trekking.css'; // Check the correctness of this line
import TrekkingData from './TrekingData';

const Trekking = () => {
  return (
    <div>
      <h2>Welcome to ShaikhTrekkings !</h2>
      {TrekkingData.map((trek) => (
        <div key={trek.id}>
          <img src={trek.imgSrc} alt={trek.destTitle} />
          <h3>{trek.destTitle}</h3>
          <p>{trek.description}</p>
          <p>Duration: {trek.duration}</p>
          <Link to={`/trek/${trek.id}`}>View Details</Link>
          <Link to={`/trek/${trek.id}/videos`}>Watch Video</Link>
        </div>
      ))}
    </div>
  );
};

export default Trekking;
