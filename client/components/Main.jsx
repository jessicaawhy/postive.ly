import React from 'react';
import StyledMain from './Main.styled';
import AuthLoginForm from './AuthLoginForm';
import AuthSignupForm from './AuthSignupForm';
import GratNewForm from './GratNewForm';
import GratShareForm from './GratShareForm';
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
    } if (form === 'new') {
      return <GratNewForm setForm={setForm} />;
    } if (form === 'share') {
      return <GratShareForm setForm={setForm} />;
    }

    if (!user) {
      return <About />;
    }

    return <UserPage user={user} setForm={setForm} />;
  };

  return (
    <StyledMain>
      {display()}
    </StyledMain>
  );
};

export default Main;
