import styled from 'styled-components';
import Button from '../../reusable-styles/Button.styled';

const StyledContainer = styled.div`
  border: 2px dashed var(--grey);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  min-width: 400px;
  margin: 20px;
  padding: 20px;
  height: 75%;

  > * {
    margin: 15px 0;
  }

  h3 {
    font-size: 25px;
  }

  .btn-container {
    display: flex;
    justify-content: center;

    button:not(:last-of-type) {
      margin-right: 10px;
    }

    ${Button} {
      &:hover {
      span {
          color: rgb(201, 48, 48);
        }
      }
    }
  }
`;

export default StyledContainer;
