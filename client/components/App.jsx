import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import GlobalStyle from './reusable-styles/GlobalStyle.styled';

const App = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState(null);
  const [gratitudes, setGratitudes] = useState(null);
  const [affirmation, setAffirmation] = useState('Repeating positive affirmations will give power to the phrase, since hearing something often makes it more likely you\'ll believe it. Alter your subconcious thoughts and add an affirmation!');

  useEffect(() => {
    if (user !== null) {
      fetch('api/user/jess')
        .then((response) => response.json())
        .then((data) => setGratitudes(data.gratitudes));
    }
  }, [user]);

  return (
    <>
      <GlobalStyle />
      <Navbar
        user={user}
        setForm={setForm}
        setUser={setUser}
        affirmation={affirmation}
        setAffirmation={setAffirmation}
      />
      <Main
        user={user}
        setUser={setUser}
        gratitudes={gratitudes}
        setGratitudes={setGratitudes}
        form={form}
        setForm={setForm}
        affirmation={affirmation}
        setAffirmation={setAffirmation}
      />
    </>
  );
};

export default App;
