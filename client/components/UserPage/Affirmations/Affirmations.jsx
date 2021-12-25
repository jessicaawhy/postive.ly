import React, { useState } from 'react';
import StyledContainer from './Affirmations.styled';

const Affirmations = ({ affirmation }) => {
  const [saved, setSaved] = useState(true);
  const [text, setText] = useState(affirmation);

  const handleClick = () => {
    setSaved(false);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const saveAffirmation = async (e) => {
    try {
      if (!text) throw new Error('empty');

      await fetch('/api/user/test/affirmation', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ affirmation: text }),
      });

      setSaved(true);
    } catch (err) {
      if (err.message === 'empty') {
        alert('When you truly believe you can do something, your actions often follow. Add an affirmation to get started!');
      } else {
        alert('Error in saving affirmation. Please try again');
      }

      setSaved(false);
    }
  };

  return (
    <StyledContainer>
      <h3>Affirmations</h3>
      {
        saved === true
          ? <p onClick={handleClick} id="affirmation">{text}</p>
          : (
            <textarea
              id="input"
              autoFocus
              onChange={onChange}
              onBlur={saveAffirmation}
              defaultValue={text}
            />
          )
      }
    </StyledContainer>
  );
};

export default Affirmations;
