import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import StyledContainer from './Gratitudes.styled';
import Button from '../../reusable-styles/Button.styled';
import List from '../List/List';

const Gratitudes = ({ setModal }) => {
  const user = useUser();
  const [gratitudes, setGratitudes] = useState(user.gratitudes);

  useEffect(() => {
    setGratitudes(user.gratitudes);
  }, [user.gratitudes]);

  return (
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
};
export default Gratitudes;
