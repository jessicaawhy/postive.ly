import React from 'react';
import StyledContainer from './Gratitudes.styled';
import Button from '../reusable-styles/Button.styled';
import List from '../List/List';

const Gratitudes = ({ setForm }) => (
  <StyledContainer>
    <h3>Gratitudes</h3>
    <List />
    <div className="btn-container">
      <Button onClick={() => setForm('new')}>Add New Gratitude</Button>
      <Button onClick={() => setForm('share')}>Share The Love &#9829;</Button>
    </div>
  </StyledContainer>
);
export default Gratitudes;
