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
  }
`;

export default StyledContainer;
