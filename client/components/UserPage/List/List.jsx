import React from 'react';
import StyledList from './List.styled';

const List = ({ gratitudes }) => {
  console.log('hi');

  return (
    <StyledList>
      {
        gratitudes && gratitudes.map((x) => <li>{x}</li>)
      }
    </StyledList>
  );
};
export default List;
