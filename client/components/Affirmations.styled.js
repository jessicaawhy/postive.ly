import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 2px dashed rgb(200, 200, 200);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-width: 400px;
  margin: 20px;
  padding: 20px;

  #affirmation {
    cursor: pointer;
  }

  > * {
    margin: 15px 0;
  }

  h3 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }

  textarea {
    width: 85%;
    height: 50px;
    font-size: 15px;
    resize: none;
    padding: 5px;
    vertical-align: center;

    &:focus {
      outline: none;
      box-shadow: none;
      border: 1px solid rgb(200, 200, 200);
      border-radius: 5px;
    }
  }
`;

export default StyledContainer;
