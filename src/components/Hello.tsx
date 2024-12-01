import React from "react";
import { H1 } from "./h1";
import styled from 'styled-components';

export function Hello({ name }: { name: string }): JSX.Element{
  return <Container>
    <H1>Hi, {name}</H1>
    <SayHello>Good Morning</SayHello>
  </Container>;
}

const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const SayHello = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  color: #D9D9D9;
`;
