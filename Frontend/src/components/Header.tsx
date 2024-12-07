import React from 'react';
import styled from 'styled-components';

export function Header(): JSX.Element {
  return <TitleBar>
    <img src="/assets/Frame 2.png" />
    <h2>Schedule</h2>
    <img src="/assets/Profile.png" />
  </TitleBar>;
}

const TitleBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h2 {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
  }
`;