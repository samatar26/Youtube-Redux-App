import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTopVideos, searchVideos } from './../../actions/index';
import TopVideos from './../TopVideos';
import { MainContent } from './../base/MainContent';
import {
  HomeTitle,
  HomeInput,
  HomeButton,
  HomeForm,
  HomeTopVideos,
} from './../base/Home';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTopVideos();
    this.state = { term: '' };
  }

  handleInputChange = ev => {
    this.setState({ term: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.searchVideos(this.state.term);
  };

  render() {
    console.log(this.props);
    return (
      <MainContent>
        <HomeTitle>Top videos of the past 24 hours</HomeTitle>
        <HomeForm onSubmit={this.handleSubmit}>
          <HomeInput
            required
            type="text"
            name="searchTerm"
            value={this.state.term}
            onChange={this.handleInputChange}
            placeholder="Search Youtube Videos"
          />
          <HomeButton type="submit">Search</HomeButton>
        </HomeForm>
        <HomeTopVideos>
          {this.props.topVideos.map(video => <TopVideos video={video} />)}
        </HomeTopVideos>
      </MainContent>
    );
  }
}

function mapStateToProps({ topVideos, searchVideos }) {
  return { topVideos, searchVideos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchTopVideos: fetchTopVideos, searchVideos: searchVideos },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
