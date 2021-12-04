import React, { useState, useEffect } from 'react';
import StyledList from './List.styled';
import Button from './reusable-styles/Button.styled';

const List = () => {
  const gratitudes = [
    'Went to the beach and saw the sunset!',
    'Coffee art on point this morning',
    'Got an interview response today!!!',
    'Went to the beach and saw the sunset!',
    'Coffee art on point this morning',
    'Got an interview response today!!!',
    'Went to the beach and saw the sunset!',
    'Coffee art on point this morning',
    'Got an interview response today!!!',
    'Went to the beach and saw the sunset!',
    'Coffee art on point this morning',
    'Got an interview response today!!!',
    'Went to the beach and saw the sunset!',
    'Coffee art on point this morning',
    'Got an interview response today!!!',
    'Went to the beach and saw the sunset!',
    'Coffee art on point this morning',
    'Got an interview response today!!!',
  ];

  return (
    <StyledList>
      {
        gratitudes.map((x) => <li>{x}</li>)
      }
    </StyledList>
  );
};
export default List;
