import React from 'react';
import StyledForm from './AuthForm.styled';
import Button from './reusable-styles/Button.styled';

const AuthLoginForm = ({ form, setUser, setForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(e.target.username.value);
    setForm(null);
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <h2>Log in</h2>
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
        <Button color={{ r: 255, g: 219, b: 61 }}>SUBMIT</Button>
      </div>
    </StyledForm>
  );
};
export default AuthLoginForm;
