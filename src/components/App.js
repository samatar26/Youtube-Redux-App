import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/HomePage';

class App extends Component {
  render() {
    return <HomePage />;
  }
}

export default App;
