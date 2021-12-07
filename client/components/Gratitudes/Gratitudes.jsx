import React from 'react';
import StyledContainer from './Gratitudes.styled';
import Button from '../reusable-styles/Button.styled';
import List from '../List/List';

const Gratitudes = ({ setForm, gratitudes, setGratitudes }) => (
  <StyledContainer>
    <h3>Gratitudes</h3>
    <List gratitudes={gratitudes} setGratitudes={setGratitudes} />
    <div className="btn-container">
      <Button onClick={() => setForm('new')}>Add New Gratitude</Button>
      <Button onClick={() => setForm('share')}>
        Share The Love
        {' '}
        <span>&#9829;</span>
      </Button>
    </div>
  </StyledContainer>
);

export default Gratitudes;
