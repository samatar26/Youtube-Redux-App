import React from 'react';
import {
  TopVideoContainer,
  TopVideoSnippet,
} from './../components/base/TopVideos';

const TopVideos = ({ video }) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <TopVideoContainer>
      <span>{video.snippet.title}</span>
      <TopVideoSnippet src={imageUrl} />
    </TopVideoContainer>
  );
};

export default TopVideos;
