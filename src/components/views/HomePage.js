import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTopVideos } from './../../actions/index';
import { MainContent } from './../base/MainContent';
import { HomeTitle, HomeInput, HomeButton, HomeForm } from './../base/Home';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleInputChange = ev => {
    this.setState({ term: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
  };

  componentWillMount() {
    this.props.fetchTopVideos();
  }

  render() {
    console.log(this.props);
    return (
      <MainContent>
        <HomeTitle>Search your favourite videos</HomeTitle>
        <HomeForm onSubmit={this.handleSubmit}>
          <HomeInput
            required
            type="text"
            name="searchTerm"
            value={this.state.term}
            onChange={this.handleInputChange}
          />
          <HomeButton type="submit">Search</HomeButton>
        </HomeForm>
      </MainContent>
    );
  }
}

function mapStateToProps({ topVideos }) {
  return { topVideos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTopVideos: fetchTopVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
