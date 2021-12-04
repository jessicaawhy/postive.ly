import React from 'react';
import StyledNavBar from './Navbar.styled';
import Button from '../reusable-styles/Button.styled';

const Navbar = ({ user, setForm, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    setForm(null);
  };

  return (
    <StyledNavBar>
      <div onClick={() => setForm(null)}>
        <img height="100" alt="happy sun icon" src="../images/sun.png" />
        <h1>positive.ly</h1>
      </div>
      <div className="btn-container">
        {
          user === null
            ? (
              <>
                <Button onClick={() => setForm('login')} border="white" color="white">LOG IN</Button>
                <Button onClick={() => setForm('signup')}>SIGN UP</Button>
              </>
            )
            : (
              <Button onClick={handleLogout} color="white">LOG OUT</Button>
            )
        }
      </div>
    </StyledNavBar>
  );
};

export default Navbar;
