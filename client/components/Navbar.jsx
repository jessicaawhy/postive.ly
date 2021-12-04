import React from 'react';
import StyledNavBar from './Navbar.styled';
import Button from './reusable-styles/Button.styled';

const Navbar = ({ user, setForm, setUser }) => (
  <StyledNavBar>
    <div onClick={() => setForm(null)}>
      <img height="100" alt="happy sun icon" src="../images/sun.png" />
      <h1>positive.ly</h1>
    </div>

    <div>
      {
        user === null
          ? (
            <>
              <Button onClick={() => setForm('login')}>LOG IN</Button>
              <Button onClick={() => setForm('signup')} color={{ r: 255, g: 219, b: 61 }}>SIGN UP</Button>
            </>
          )
          : (
            <Button onClick={() => setUser(null)} color={{ r: 255, g: 219, b: 61 }}>LOG OUT</Button>
          )
      }
    </div>
  </StyledNavBar>
);

export default Navbar;
