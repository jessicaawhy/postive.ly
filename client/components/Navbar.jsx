import React from 'react';
import StyledNavBar from './Navbar.styled';

import ButtonLink from './reusable-styles/ButtonLink.styled';

const Navbar = () => (
  <StyledNavBar>
    <div>
      <img height="100" alt="happy sun icon" src="../images/sun.png" />
      <h1>positive.ly</h1>
    </div>
    {/* TODO: navbar should be different depending on log in status */}
    <div>
      <ButtonLink href="login">LOG IN</ButtonLink>
      <ButtonLink color={{ r: 255, g: 219, b: 61 }} href="/signup">SIGN UP</ButtonLink>
    </div>
  </StyledNavBar>
);

export default Navbar;
