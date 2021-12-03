import React from 'react';
import StyledMain from './Main.styled';

const Main = ({ form }) => (
  <StyledMain>
    {
      form ? `form: ${form}` : <div>main page contents</div>
    }
  </StyledMain>
);

export default Main;
