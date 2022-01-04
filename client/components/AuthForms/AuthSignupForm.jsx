import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import StyledForm from './AuthForm.styled';
import Button from '../reusable-styles/Button.styled';

const AuthSignupForm = () => {
  const loggedIn = useUser() !== null;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { username, password } = e.target;

      const response = await fetch('/api/user/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ username: username.value }),
      });

      if (!response.ok) {
        throw new Error('User already exists!');
      }

      navigate('/');
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
  }, [loggedIn]);

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
        <input type="password" id="password" />
      </label>
      <div className="btn-container">
        <Button onClick={() => navigate('/')} color="white">CANCEL</Button>
        <Button type="submit">SUBMIT</Button>
      </div>
    </StyledForm>
  );
};
export default AuthSignupForm;
