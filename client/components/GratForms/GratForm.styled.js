import styled from 'styled-components';

const StyledForm = styled.form`
  border: 1px solid var(--black);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  width: 400px;

  h2 {
    font-size: 20px;
    margin-bottom: 30px;
  }

  label {
    margin: 10px 0;
    font-size: 20px;
    width: 100%;
  }

  input {
    box-sizing: border-box;
    width: inherit;
    margin: 5px 0;
    font-size: 20px;
    padding: 5px;
  }

  .btn-container {
    margin-top: 15px;

    > * {
      margin-right: 5px;
    }
  }

`;

export default StyledForm;
