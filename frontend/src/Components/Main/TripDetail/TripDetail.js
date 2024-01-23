import React from 'react';
import { useNavigate } from 'react-router-dom';


import Data from '../TripDetail/TripData';  // Adjust the path based on your project structure


const TripDetail = ({ match }) => {
  // const { params } = match;
  // const TripId = parseInt(params.id);
  // const Trip = Data.find(item => item.id === TripId);

  // const Navigate = useNavigate();

  // const handleBookNow = () => {
  //   // Redirect to the TripData page when the "Details" button is clicked
  //   Navigate.push('/TripData');
  // };

  // return (
  //   <div>
  //     <h1>{Trip.destTitle} Details</h1>
  //     <p>{Trip.description}</p>
  //     <button onClick={handleBookNow}>Details</button>
  //   </div>
  // );

  return(
    <div>
      <h1>zddddg</h1>
    </div>
  )
};

export default TripDetail;
