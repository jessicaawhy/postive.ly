import React from 'react';
import StyledMain from './Main.styled';
import AuthLoginForm from './AuthLoginForm';
import AuthSignupForm from './AuthSignupForm';
import About from './About';
import UserPage from './UserPage';

const Main = ({
  user, form, setUser, setForm,
}) => {
  const display = () => {
    if (form === 'login') {
      return <AuthLoginForm setUser={setUser} setForm={setForm} />;
    } if (form === 'signup') {
      return <AuthSignupForm setForm={setForm} />;
    }

    if (!user) {
      return <About />;
    }

    return <UserPage user={user} />;
  };

  return (
    <StyledMain>
      {display()}
    </StyledMain>
  );
};

export default Main;
