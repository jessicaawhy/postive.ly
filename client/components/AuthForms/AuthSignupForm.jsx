import React from 'react';
import StyledForm from './AuthForm.styled';
import Button from '../reusable-styles/Button.styled';

const AuthSignupForm = ({ setForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(null);
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <h2>Sign up</h2>
      <label htmlFor="username">
        Username
        <br />
        <input type="text" id="username" />
      </label>
      <label htmlFor="password">
        Password
        <br />
        <input type="text" id="password" type="password" />
      </label>
      <div className="btn-container">
        <Button onClick={() => setForm(null)} color="white">CANCEL</Button>
        <Button>SUBMIT</Button>
      </div>
    </StyledForm>
  );
};
export default AuthSignupForm;
