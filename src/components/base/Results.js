import styled from 'styled-components';

export const VideoDetailContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  & > * + * {
    margin-top: 3em;
  }
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
 transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 &:hover{
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
 }
`;

export const VideoDetailPlayer = styled.iframe`
  width: 80%;
  height: 200px;
`;

export const VideoDetailTitle = styled.h2`
  text-align: center;
`;

export const VideoDetailDescription = styled.p`
  text-align: center;
`;
