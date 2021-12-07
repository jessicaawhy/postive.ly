import React from 'react';
import StyledMain from './Main.styled';
import AuthLoginForm from '../AuthForms/AuthLoginForm';
import AuthSignupForm from '../AuthForms/AuthSignupForm';
import GratNewForm from '../GratForms/GratNewForm';
import GratShareForm from '../GratForms/GratShareForm';
import About from '../About/About';
import UserPage from '../UserPage/UserPage';

const Main = ({
  user, gratitudes, form, setUser, setGratitudes, setForm, affirmation, setAffirmation,
}) => {
  const display = () => {
    if (form === 'login') {
      return <AuthLoginForm setUser={setUser} setForm={setForm} />;
    } if (form === 'signup') {
      return <AuthSignupForm setForm={setForm} />;
    } if (form === 'new') {
      return (
        <GratNewForm
          setForm={setForm}
          gratitudes={gratitudes}
          setGratitudes={setGratitudes}
        />
      );
    } if (form === 'share') {
      return <GratShareForm setForm={setForm} />;
    }

    if (user) {
      return (
        <UserPage
          user={user}
          gratitudes={gratitudes}
          setGratitudes={setGratitudes}
          setForm={setForm}
          affirmation={affirmation}
          setAffirmation={setAffirmation}
        />
      );
    }

    return <About />;
  };

  return (
    <StyledMain>
      {display()}
    </StyledMain>
  );
};

export default Main;
