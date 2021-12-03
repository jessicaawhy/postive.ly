import styled from 'styled-components';

const StyledNavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 35px;
    padding-left: 15px;
  }

  div {
    display: flex;
    align-items: center;

    & * {
      margin: 5px;
    }
  }
`;

export default StyledNavBar;
