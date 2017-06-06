import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTopVideos } from './../../actions/index';
import TopVideo from './../TopVideo';
import { HomeTitle, HomeTopVideos } from './../base/Home';

class HomeTopVideoList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTopVideos();
  }

  render() {
    return (
      <HomeTopVideos>
        {this.props.searchVideosResult.map(video => {
          const videoId = video.id.videoId;
          return (
            <TopVideo key={video.id.videoId} videoUrl={videoId} video={video} />
          );
        })}
      </HomeTopVideos>
    );
  }
}

function mapStateToProps({ searchVideosResult }) {
  return { searchVideosResult };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTopVideos: fetchTopVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTopVideoList);
