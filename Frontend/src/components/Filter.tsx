import React from 'react';
import styled from 'styled-components';

interface FilterProps {
  index: number;
  onFilterChange: (newIndex: number) => void;
}

export function Filter({ index, onFilterChange }: FilterProps): JSX.Element {
  const handleFilterChange = (newIndex: number) => {
    if (index !== newIndex) {
      onFilterChange(newIndex);
    }
  };

  return (
    <Container>
      <FilterItem
        onClick={() => handleFilterChange(0)}
        selected={index === 0}
      >
        Task List
      </FilterItem>
      <FilterItem
        onClick={() => handleFilterChange(1)}
        selected={index === 1}
      >
        Completed
      </FilterItem>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8F7FF 100%);
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 24px;
`;

const FilterItem = styled.div<{ selected: boolean }>`
  flex: 1;

  ${({ selected }) =>
    selected
      ? 'background: linear-gradient(135.96deg, #2F394B 0%, #212A3A 101.74%);'
      : ''};
  border-radius: 10px;
  height: 44px;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;

  color: ${({ selected }) => (selected ? '#FFFFFF' : '#2F394B')};
`;
