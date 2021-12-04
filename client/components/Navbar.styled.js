import styled from 'styled-components';

const StyledNavBar = styled.header`
  // border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 35px;
    padding-left: 15px;
    cursor: pointer;
  }

  img {
    cursor: pointer;
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
