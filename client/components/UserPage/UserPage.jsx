/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import StyledUserPage from './UserPage.styled';
import Affirmations from './Affirmations/Affirmations';
import Gratitudes from './Gratitudes/Gratitudes';
import GratNewForm from './GratForms/GratNewForm';
import GratShareForm from './GratForms/GratShareForm';

const UserPage = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [modal, setModal] = useState(null);

  const FormModal = () => {
    if (modal === 'new') {
      return <GratNewForm setModal={setModal} />;
    } if (modal === 'share') {
      return <GratShareForm setModal={setModal} />;
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  return (
    user
    && (
      <StyledUserPage>
        {
          modal === null
            ? (
              <>
                <h2>Hello, {user.username}!</h2>
                <Affirmations />
                <Gratitudes setModal={setModal} />
              </>
            )
            : <FormModal />
        }
      </StyledUserPage>
    )
  );
};

export default UserPage;
