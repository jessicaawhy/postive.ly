import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import GlobalStyle from './reusable-styles/GlobalStyle.styled';

const App = () => {
  const [user, setUser] = useState('jess');
  const [form, setForm] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Navbar user={user} setForm={setForm} setUser={setUser} />
      <Main user={user} form={form} setForm={setForm} setUser={setUser} />
    </>
  );
};

export default App;
