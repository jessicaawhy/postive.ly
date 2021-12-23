/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import StyledUserPage from './UserPage.styled';
import Affirmations from './Affirmations/Affirmations';
import Gratitudes from './Gratitudes/Gratitudes';

const UserPage = () => (
  <StyledUserPage>
    <h2>Hello!</h2>
    <Affirmations />
    <Gratitudes />
  </StyledUserPage>
);

export default UserPage;
