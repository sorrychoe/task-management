import React from 'react';
import styled from 'styled-components';

interface TaskProps {
  title: string;
  time: string;
}

export function Task({ title, time }: TaskProps): JSX.Element {
    return <Container>
      <Icon>
        <img src="/assets/Frame 3.png" />
      </Icon>
      <Content>
        <h4>{ title }</h4>
        <p>{ time }</p>
      </Content>
      <ActionButton src="/assets/Frame 1.png" />  
    </Container>;
  }

  const Container = styled.div`
  background: linear-gradient(180deg, rgba(41, 47, 63, 0) 0%, rgba(41, 47, 63, 0.8) 100%);
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  filter: drop-shadow(14px 18px 34px rgba(0, 0, 0, 0.32));
  border-radius: 15px;
  margin-bottom: 16px;
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`


const Icon = styled.div`
  border-radius: 10px;
  width: 48px;
  height: 48px;
  background: #384156;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  flex: 1;
  padding: 0 16px;

  h4 {
    margin: 0;
    margin-bottom: 8px;
    color: #FFF;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }

  p {
    margin: 0;
    color: #D9D9D9;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

const ActionButton = styled.img`
`