import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

import StyledMain from './Main.styled';

const About = () => {
  const loggedIn = useUser() !== null;
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
  }, [loggedIn]);

  return (
    <StyledMain>
      <img alt="sunflower field at sunset" src="../images/timothy-eberly-XVE2eMZGrhk-unsplash.jpg" />
    </StyledMain>
  );
};
export default About;
