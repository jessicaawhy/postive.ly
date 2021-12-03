import React from 'react';
import StyledNavBar from './Navbar.styled';
import Button from './reusable-styles/Button.styled';

const Navbar = ({ user }) => (
  <StyledNavBar>
    <div>
      <img height="100" alt="happy sun icon" src="../images/sun.png" />
      <h1>positive.ly</h1>
    </div>

    <div>
      {
          user === null
            ? (
              <>
                <Button>LOG IN</Button>
                <Button color={{ r: 255, g: 219, b: 61 }}>SIGN UP</Button>
              </>
            )
            : (
              <Button color={{ r: 255, g: 219, b: 61 }}>LOG OUT</Button>
            )
        }
    </div>
  </StyledNavBar>
);

export default Navbar;
