import React from 'react';
import StyledForm from './GratForm.styled';
import Button from '../../reusable-styles/Button.styled';

const GratShareForm = ({ setModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // todo: add sharing feature
    setModal(null);
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <h2>Share Gratitude</h2>
      <label htmlFor="email">
        {'Friend\'s email'}
        <br />
        <input type="text" id="email" />
      </label>
      <label htmlFor="gratitude">
        Message
        <br />
        <input type="text" id="gratitude" />
      </label>
      <div className="btn-container">
        <Button onClick={() => setModal(null)} color="white">CANCEL</Button>
        <Button type="submit">SUBMIT</Button>
      </div>
    </StyledForm>
  );
};

export default GratShareForm;
