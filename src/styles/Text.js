import React from 'react';
import styled, { css } from 'styled-components';

const Text = styled.p`
  text-decoration: none;
  margin: 0;
  margin: ${props => props.margin};
  padding: 0;
  color: ${props => props.color};
  font-size: ${props => props.size};
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  ${props =>
    (props.header &&
      css`
        font-weight: 800;
        font-size: 1.75vw;
        font-family: Roboto, sans-serif;
        -webkit-user-select: none; /* Chrome all / Safari all */
        -moz-user-select: none; /* Firefox all */
        -ms-user-select: none; /* IE 10+ */
        user-select: none;
        @media (max-width: 768px) {
          font-size: 3.5vw;
        }
      `) ||
    (props.main &&
      css`
        font-size: 12px;
        font-size: 2.2vw;

        font-family: 'Roboto', sans-serif;
        @media (max-width: 768px) {
          font-size: 3vw;
        }
      `) ||
    (props.title &&
      css`
        font-size: 20px;
        font-size: 3vw;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
        @media (max-width: 768px) {
          font-size: 5vw;
        }`)};
`;

export default Text;
