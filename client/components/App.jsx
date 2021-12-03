import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import GlobalStyle from './App.styled';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Navbar user={user} />
    </>
  );
};

export default App;
