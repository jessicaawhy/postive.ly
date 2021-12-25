import React from 'react';
import StyledList from './List.styled';

const List = ({ gratitudes }) => (
  <StyledList>
    {
        gratitudes.length > 0
          ? gratitudes.map((x) => <li>{x}</li>)
          : <li>Nothing here yet... Add a new gratitude to get started!</li>
    }
  </StyledList>
);
export default List;
