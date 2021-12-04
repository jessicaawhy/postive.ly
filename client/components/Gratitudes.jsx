import React, { useState, useEffect } from 'react';
import StyledContainer from './Gratitudes.styled';
import Button from './reusable-styles/Button.styled';
import List from './List';

const Gratitudes = () => (
  <StyledContainer>
    <h3>Gratitudes</h3>
    <List />
    <div className="btn-container">
      <Button color={{ r: 255, g: 219, b: 61 }}>Add New Gratitude</Button>
      <Button color={{ r: 255, g: 219, b: 61 }}>Share The Love &#9829;</Button>
    </div>
  </StyledContainer>
);
export default Gratitudes;
