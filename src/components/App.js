import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/Homepage';
import './../App.css';

class App extends Component {
  state = { searchTerm: '' };

  handleFormSubmit = ev => {
    ev.preventDefault();
    console.log(this.state.searchTerm);
  };

  handleInputChange = ev => {
    const name = ev.target.name;
    this.setState({ [name]: ev.target.value });
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                searchTerm={this.state.searchTerm}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
