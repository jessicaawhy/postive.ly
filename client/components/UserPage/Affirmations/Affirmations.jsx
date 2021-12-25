import React, { useState } from 'react';
import StyledContainer from './Affirmations.styled';

const Affirmations = ({ affirmation }) => {
  const [saved, setSaved] = useState(true);

  const handleClick = () => {
    setSaved(false);
  };

  const saveAffirmation = (e) => {
    setSaved(true);
  };

  console.log('affirmation ', affirmation);

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
