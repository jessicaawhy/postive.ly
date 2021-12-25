import React from 'react';
import StyledContainer from './Gratitudes.styled';
import Button from '../../reusable-styles/Button.styled';
import List from '../List/List';

const Gratitudes = ({ gratitudes, setModal }) => (
  <StyledContainer>
    <h3>Gratitudes</h3>
    <List gratitudes={gratitudes} />
    <div className="btn-container">
      <Button onClick={() => setModal('new')}>Add New Gratitude</Button>
      <Button onClick={() => setModal('share')}>
        Share The Love
        {' '}
        <span>&#9829;</span>
      </Button>
    </div>
  </StyledContainer>
);

export default Gratitudes;
