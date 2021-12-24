import styled from 'styled-components';

const StyledNavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  .logo-container {
    display: flex;
    align-items: center;

    h1 {
      font-size: 35px;
      padding-left: 15px;
      cursor: pointer;
    }

    img {
      cursor: pointer;
    }
  }

  .btn-container {
    display: flex;
    align-items: center;

    & * {
      margin: 5px;
    }
  }
`;

export default StyledNavBar;
