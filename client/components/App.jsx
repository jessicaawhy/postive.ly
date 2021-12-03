import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import GlobalStyle from './App.styled';

const App = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Navbar user={user} setForm={setForm} />
      <Main form={form} />
    </>
  );
};

export default App;
