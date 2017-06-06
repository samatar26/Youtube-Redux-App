import React from 'react';

const VideoDetail = ({ videoId }) => {
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(this);
  return (
    <div>
      <div>
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div />
        <div />
      </div>
    </div>
  );
};
export default VideoDetail;
