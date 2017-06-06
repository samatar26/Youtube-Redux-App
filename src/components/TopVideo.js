import React from 'react';
import {
  TopVideoContainer,
  TopVideoSnippet,
  TopVideoLink,
} from './../components/base/TopVideos';
import { Link } from 'react-router-dom';

const TopVideo = ({ video, videoUrl }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <TopVideoLink to={`/video-detail-${video.id.videoId}`}>
      <TopVideoContainer>
        <span>{video.snippet.title}</span>
        <TopVideoSnippet src={imageUrl} />
      </TopVideoContainer>
    </TopVideoLink>
  );
};

export default TopVideo;
