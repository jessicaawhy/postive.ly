import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import GlobalStyle from './reusable-styles/GlobalStyle.styled';
import StyledMain from './App.styled';

import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import AuthLoginForm from './AuthForms/AuthLoginForm';
import AuthSignupForm from './AuthForms/AuthSignupForm';
import UserPage from './UserPage/UserPage';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <StyledMain>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signup" element={<AuthSignupForm />} />
          <Route path="/login" element={<AuthLoginForm />} />
          <Route path="/home" element={<UserPage />} />
        </Routes>
      </StyledMain>
    </Router>
  </>
);

export default App;
