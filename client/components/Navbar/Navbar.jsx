import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser, useUserUpdate } from '../UserContext';
import StyledNavBar from './Navbar.styled';
import Button from '../reusable-styles/Button.styled';

const Navbar = () => {
  const loggedIn = useUser() !== null;
  const updateUser = useUserUpdate();

  return (
    <StyledNavBar>
      <NavLink to="/" className="logo-container">
        <img height="100" alt="happy sun icon" src="../images/sun.png" />
        <h1>positive.ly</h1>
      </NavLink>

      <div className="btn-container">
        {
          loggedIn
            ? (
              <NavLink to="/">
                <Button color="white" onClick={() => updateUser(null)}>LOG OUT</Button>
              </NavLink>
            )
            : (
              <>
                <NavLink to="login">
                  <Button border="white" color="white">LOG IN</Button>
                </NavLink>
                <NavLink to="signup">
                  <Button>SIGN UP</Button>
                </NavLink>
              </>
            )
        }
      </div>
    </StyledNavBar>
  );
};

export default Navbar;
