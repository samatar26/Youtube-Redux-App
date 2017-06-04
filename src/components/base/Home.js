import styled from 'styled-components';

export const HomeTitle = styled.h1`
  text-align: center;
  font-family: "Helvetica";
`;

export const HomeForm = styled.form`
  display: flex;
`;

export const HomeInput = styled.input`
    width: 100%;
    padding: 0.75em 1em;
    margin-right: 0.4em;
    background-color: #ebebe2;
    border-radius: 2px;
    border: none;
    font-size: inherit;
    transition: background-color 0.2s;
    transition: box-shadow 0.2s;
    &:focus{
      outline: none;
      box-shadow: 0 0 0 2px palevioletred;
    }
`;

export const HomeButton = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 2px;
  border: none;
  background-color: palevioletred;
  font-size: inherit;
  transition: background-color 0.2s;
  &:hover,
  &:focus{
    background-color: #d4547e;
  }
  &:focus{
    outline: none;
  }
`;

export const HomeTopVideos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
`;
