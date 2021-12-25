import React from 'react';
import { render } from 'react-dom';
import { UserProvider } from './components/UserContext';
import App from './components/App';

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root'),
);
