import React, { useState } from 'react';
import StyledContainer from './Affirmations.styled';

const Affirmations = ({ affirmation, setAffirmation }) => {
  const [saved, setSaved] = useState(true);

  const handleClick = () => {
    setSaved(false);
  };

  const saveAffirmation = (e) => {
    setAffirmation(e.target.value || 'Repeating positive affirmations will give power to the phrase, since hearing something often makes it more likely you\'ll believe it. Alter your subconcious thoughts and add an affirmation!');
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
