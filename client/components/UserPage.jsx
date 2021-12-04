/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import StyledUserPage from './UserPage.styled';
import Affirmations from './Affirmations';
import Gratitudes from './Gratitudes';

const UserPage = ({ user }) => (
  <StyledUserPage>
    <h2>Hello, {user}!</h2>
    <Affirmations />
    <Gratitudes />
  </StyledUserPage>
);

export default UserPage;
