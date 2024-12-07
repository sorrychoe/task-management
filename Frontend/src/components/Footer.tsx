import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Footer(): JSX.Element {
  return (
    <Container>
      <img src="/assets/Frame.png" alt="Frame Icon" />
      <Link to="/new">
        <img src="/assets/Group 1440.png" alt="New Task Icon" />
      </Link>
      <img src="/assets/My.png" alt="My Icon" />
    </Container>
  );
}

const Container = styled.footer`
  background: #292F3F;
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;

  height: 88px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: -24px;

  img {
    width: 24px;
    height: 24px;
  }
`;
