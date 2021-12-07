/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import StyledUserPage from './UserPage.styled';
import Affirmations from '../Affirmations/Affirmations';
import Gratitudes from '../Gratitudes/Gratitudes';

const UserPage = ({
  user, gratitudes, setForm, setGratitudes, affirmation, setAffirmation,
}) => (
  <StyledUserPage>
    <h2>Hello, {user}!</h2>
    <Affirmations
      affirmation={affirmation}
      setAffirmation={setAffirmation}
    />
    <Gratitudes
      setForm={setForm}
      gratitudes={gratitudes}
      setGratitudes={setGratitudes}
    />
  </StyledUserPage>
);

export default UserPage;
