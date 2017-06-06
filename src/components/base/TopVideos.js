import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopVideoContainer = styled.article`
  display: flex;
  min-width: 18em;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1em;
  width:50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
 transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 &:hover{
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
 }

`;

export const TopVideoLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex: 1;
  min-width: 18em;
  width: 50%;
`;

export const TopVideoSnippet = styled.img`
  max-width: 100%;
`;
