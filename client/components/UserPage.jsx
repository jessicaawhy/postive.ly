/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import StyledUserPage from './UserPage.styled';

const UserPage = ({ user }) => (
  <StyledUserPage>
    <h2>Hello, {user}!</h2>
    <h3>Affirmations</h3>
    <h3>Gratitudes</h3>
  </StyledUserPage>
);

export default UserPage;
