/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import StyledUserPage from './UserPage.styled';
import Affirmations from './Affirmations/Affirmations';
import Gratitudes from './Gratitudes/Gratitudes';

const UserPage = () => {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  return (
    user
    && (
    <StyledUserPage>
      <h2>Hello, {user.username}!</h2>
      <Affirmations affirmation={user.affirmation} />
      <Gratitudes gratitudes={user.gratitudes} />
    </StyledUserPage>
    )
  );
};
export default UserPage;
