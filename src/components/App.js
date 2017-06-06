import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import VideoDetailPage from './views/VideoDetailPage';

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/video-detail:id" component={VideoDetailPage} />

      </div>
    </Router>
  );
};
