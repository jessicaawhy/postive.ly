import React from 'react';
import StyledForm from './GratForm.styled';
import Button from '../reusable-styles/Button.styled';

const NewForm = ({ gratitudes, setGratitudes, setForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setGratitudes([e.target.gratitude.value, ...gratitudes]);

    setForm(null);
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
        <Button onClick={() => setForm(null)} color="white">CANCEL</Button>
        <Button type="submit">SUBMIT</Button>
      </div>
    </StyledForm>
  );
};

export default NewForm;
