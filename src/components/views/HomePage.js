import React from 'react';
import { MainContent } from './../base/MainContent';
import { HomeTitle } from './../base/Home';
import HomeTopVideoList from './../container/HomeTopVideoList.js';
import HomeSearchForm from './../container/HomeSearchForm';

export default props =>
  <MainContent>
    <HomeTitle>Top videos of the past 24 hours</HomeTitle>
    <HomeSearchForm />
    <HomeTopVideoList />
  </MainContent>;
