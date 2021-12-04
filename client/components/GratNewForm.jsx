import React from 'react';
import StyledForm from './GratForm.styled';
import Button from './reusable-styles/Button.styled';

const NewForm = ({ form, setForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Button onClick={() => setForm(null)} color={{ r: 255, g: 219, b: 61 }}>CANCEL</Button>
        <Button type="submit" color={{ r: 255, g: 219, b: 61 }}>SUBMIT</Button>
      </div>
    </StyledForm>
  );
};

export default NewForm;
