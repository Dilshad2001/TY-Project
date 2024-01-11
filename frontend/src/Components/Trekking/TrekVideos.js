import React from 'react';

const TrekVideos = ({ trek }) => {
  return (
    <div>
      <h2>Videos for {trek.destTitle}</h2>
      <iframe
        width='560'
        height='315'
        src={trek.videoUrl}
        title='YouTube Video'
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrekVideos;
