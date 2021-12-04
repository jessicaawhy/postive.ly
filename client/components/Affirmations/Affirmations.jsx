import React, { useState } from 'react';
import StyledContainer from './Affirmations.styled';

const Affirmations = () => {
  const [saved, setSaved] = useState(true);
  const [affirmation, setAffirmation] = useState('YOU ARE AWESOME!');

  const handleClick = () => {
    setSaved(false);
  };

  const saveAffirmation = (e) => {
    setAffirmation(e.target.value || 'You are the best!');
    setSaved(true);
  };

  return (
    <StyledContainer>
      <h3>Affirmations</h3>
      {
        saved === true
          ? <p onClick={handleClick} id="affirmation">{affirmation}</p>
          : (
            <textarea
              id="input"
              autoFocus
              onBlur={saveAffirmation}
              defaultValue={affirmation}
            />
          )
      }
    </StyledContainer>
  );
};

export default Affirmations;
