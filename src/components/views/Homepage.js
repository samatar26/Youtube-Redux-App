import React from 'react';
import { MainContent } from './../base/MainContent';
import { HomeTitle, HomeInput, HomeButton, HomeForm } from './../base/Home';

const Homepage = ({ searchTerm, handleFormSubmit, handleInputChange }) => {
  return (
    <MainContent>
      <HomeTitle>Search your favourite videos</HomeTitle>
      <HomeForm onSubmit={handleFormSubmit}>
        <HomeInput
          required
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <HomeButton type="submit">Search</HomeButton>
      </HomeForm>
    </MainContent>
  );
};

export default Homepage;
