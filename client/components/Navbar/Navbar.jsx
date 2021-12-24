import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledNavBar from './Navbar.styled';
import Button from '../reusable-styles/Button.styled';

const Navbar = () => {
  const user = null;

  return (
    <StyledNavBar>
      <NavLink to="/" className="logo-container">
        <img height="100" alt="happy sun icon" src="../images/sun.png" />
        <h1>positive.ly</h1>
      </NavLink>

      <div className="btn-container">
        {
          user === null
            ? (
              <>
                <NavLink to="login">
                  <Button border="white" color="white">LOG IN</Button>
                </NavLink>
                <NavLink to="signup">
                  <Button>SIGN UP</Button>
                </NavLink>
              </>
            )
            : (
              <NavLink to="/">
                {/* need to add logic to sign out */}
                <Button color="white">LOG OUT</Button>
              </NavLink>
            )
        }
      </div>
    </StyledNavBar>
  );
};

export default Navbar;
