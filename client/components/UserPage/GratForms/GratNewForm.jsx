import React from 'react';
import StyledForm from './GratForm.styled';
import Button from '../../reusable-styles/Button.styled';

const NewForm = ({ setModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // todo: handle submit to server
    setModal(null);
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <h2>Add New Gratitude</h2>
      <label htmlFor="gratitude">
        What are you thankful for today?
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

export default NewForm;
