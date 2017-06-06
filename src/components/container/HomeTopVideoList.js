import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTopVideos } from './../../actions/index';
import TopVideos from './../TopVideos';
import { HomeTitle, HomeTopVideos } from './../base/Home';

class HomeTopVideoList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTopVideos();
  }

  render() {
    return (
      <HomeTopVideos>
        {this.props.topVideos.map(video => <TopVideos video={video} />)}
      </HomeTopVideos>
    );
  }
}

function mapStateToProps({ topVideos }) {
  return { topVideos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTopVideos: fetchTopVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTopVideoList);
