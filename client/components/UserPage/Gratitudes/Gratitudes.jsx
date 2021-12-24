import React from 'react';
import StyledContainer from './Gratitudes.styled';
import Button from '../../reusable-styles/Button.styled';
import List from '../List/List';

const Gratitudes = () => (
  <StyledContainer>
    <h3>Gratitudes</h3>
    <List />
    <div className="btn-container">
      <Button>Add New Gratitude</Button>
      <Button>
        Share The Love
        {' '}
        <span>&#9829;</span>
      </Button>
    </div>
  </StyledContainer>
);

export default Gratitudes;