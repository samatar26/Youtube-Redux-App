import React, { Component } from 'react';
import {
  TopVideoContainer,
  TopVideoSnippet,
  TopVideoLink,
} from './../components/base/TopVideos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectedVideo } from './../actions/index';

class TopVideo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
      <TopVideoLink
        onClick={() => {
          this.props.selectedVideo(this.props.video);
        }}
        to={`/video-detail-${this.props.video.id.videoId}`}
      >
        <TopVideoContainer>
          <span>{this.props.video.snippet.title}</span>
          <TopVideoSnippet src={imageUrl} />
        </TopVideoContainer>
      </TopVideoLink>
    );
  }
}
function mapStateToProps({ selectedVideo }) {
  return { selectedVideo };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedVideo: selectedVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopVideo);
