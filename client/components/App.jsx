import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import GlobalStyle from './reusable-styles/GlobalStyle.styled';

const App = () => {
  const [user, setUser] = useState(null);
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
