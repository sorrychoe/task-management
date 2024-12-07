import { Hello } from '../components/Hello';
import { Project } from '../components/Project';
import { Tasks } from '../components/Tasks';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import styled from 'styled-components';
import React from 'react';

export function Home(): JSX.Element {
  return <Container>
      <Header></Header>
      <Body>
      <Hello name="Stephanie"></Hello>
      <Project numOfTasks={13} title={"TATTOO Project Make Icon"} participants={[]}></Project>
      <Tasks></Tasks>
      </Body>
      <Footer></Footer>
    </Container>
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
`;

export const Body = styled.div`
  flex: 1;
  overflow-y: auto;
`;  