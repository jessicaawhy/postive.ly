import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useUserUpdate } from '../UserContext';
import StyledForm from './AuthForm.styled';
import Button from '../reusable-styles/Button.styled';

const AuthLoginForm = () => {
  const loggedIn = useUser() !== null;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
  }, [loggedIn]);

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
        <input type="text" id="password" />
      </label>
      <div className="btn-container">
        <Button onClick={() => navigate('/')} color="white">CANCEL</Button>
        <Button type="submit">SUBMIT</Button>
      </div>
    </StyledForm>
  );
};
export default AuthLoginForm;
