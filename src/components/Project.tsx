import React from 'react';
import styled from 'styled-components';

interface ProjectProps {
  numOfTasks: number;
  title: string;
  participants: [];
}

export function Project({ numOfTasks, title, participants }: ProjectProps): JSX.Element {
  return <Card>
      <BackgroundImage src="/assets/Rectangle 662.png" />
      <NumberOfTasks>{numOfTasks} Tasks</NumberOfTasks>
      <Title>{title}</Title>
    </Card>
}

const Card = styled.div`
  position: relative;
  margin-bottom: 32px;
  
  background: linear-gradient(180deg, rgba(41, 47, 63, 0) 0%, rgba(41, 47, 63, 0.8) 100%);
  border: 0.2px solid rgba(217, 217, 217, 0.15);
  filter: drop-shadow(14px 18px 34px rgba(0, 0, 0, 0.32));
  border-radius: 15px;
 
  height: 131px;
  padding: 20px;
`

  const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  margin: 8px;
  object-fit: cover; /* 이미지 비율 유지 */
`

  const NumberOfTasks = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  color: #FFFFFF;
`

  const Title = styled.div`
  width: 126px;
  margin-top: 16px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  word-break: keep-all;
`;