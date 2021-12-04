/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import StyledUserPage from './UserPage.styled';
import Affirmations from './Affirmations';
import Gratitudes from './Gratitudes';

const UserPage = ({ user, setForm }) => (
  <StyledUserPage>
    <h2>Hello, {user}!</h2>
    <Affirmations />
    <Gratitudes setForm={setForm} />
  </StyledUserPage>
);

export default UserPage;
