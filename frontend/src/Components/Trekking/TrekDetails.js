import React from 'react';
import { useNavigate } from 'react-router-dom';


const TrekDetails = ({ trek }) => {
  const  navigate = useNavigate();

  const redirectToVideos = () => {
    // Redirect to the videos page or open a modal with YouTube videos
    // You can use React Router or any other method for navigation
    navigate(`/trek/${trek.id}/videos`);
  };

  return (
    <div>
    {trek ? (
        <>
      <h2>{trek.destTitle}</h2>
      <p>{trek.description}</p>
      <p>Trek Difficulty: {trek.difficulty}</p>
      <p>Trek Duration: {trek.duration}</p>
      <p>Highest Altitude: {trek.highestAltitude}</p>
      <p>Age Limit: {trek.ageLimit}</p>
      <p>Fees: {trek.fees}</p>
      <p>Available Dates: {trek.availableDates.join(', ')}</p>
      <button onClick={redirectToVideos}>Watch Videos</button>
      </>
      ) : (
        <p>Select a trek to view details.</p>
      )}
    </div>
  );
};

export default TrekDetails;
