import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPastVideos } from './../../actions/index';
import { HomeButton, HomeButtonContainer } from './../base/Home';

class HomeTimes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeButtonContainer>
        <HomeButton onClick={() => this.props.fetchPastVideos(86400)}>
          Yesterday
        </HomeButton>
        <HomeButton onClick={() => this.props.fetchPastVideos(604800)}>
          last Week
        </HomeButton>
        <HomeButton onClick={() => this.props.fetchPastVideos(2592000)}>
          last month
        </HomeButton>
        <HomeButton onClick={() => this.props.fetchPastVideos(86400000000000)}>
          All time
        </HomeButton>
      </HomeButtonContainer>
    );
  }
}

function mapStateToProps({ searchVideosResult }) {
  console.log(searchVideosResult);
  return { searchVideosResult };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPastVideos: fetchPastVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTimes);
