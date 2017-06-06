import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideos } from './../../actions/index';
import { HomeInput, HomeButton, HomeForm } from './../base/Home';

class HomeSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleInputChange = ev => {
    this.setState({ term: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.searchVideos(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
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
    );
  }
}

function mapStateToProps({ searchVideosResult }) {
  return { searchVideosResult };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideos: searchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearchForm);
