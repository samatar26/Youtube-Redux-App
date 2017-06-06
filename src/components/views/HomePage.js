import React from 'react';
import { MainContent } from './../base/MainContent';
import { HomeTitle } from './../base/Home';
import HomeTopVideoList from './../container/HomeTopVideoList.js';
import HomeSearchForm from './../container/HomeSearchForm';
import HomeTimes from './../container/HomeTimes';

export default props =>
  <MainContent>
    <HomeTitle>Top videos of the past</HomeTitle>
    <HomeTimes />
    <HomeSearchForm />
    <HomeTopVideoList />
  </MainContent>;
