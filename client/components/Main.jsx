import React from 'react';
import StyledMain from './Main.styled';
import AuthLoginForm from './AuthLoginForm';
import AuthSignupForm from './AuthSignupForm';

const Main = ({ user, form }) => {
  const display = () => {
    if (form === 'login') {
      return <AuthLoginForm />;
    } if (form === 'signup') {
      return <AuthSignupForm />;
    }

    if (!user) {
      return <div>main page contents</div>;
    }

    return <div>user page contents</div>;
  };

  return (
    <StyledMain>
      {display()}
    </StyledMain>
  );
};

export default Main;
