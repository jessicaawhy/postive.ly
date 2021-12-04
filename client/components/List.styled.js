import styled from 'styled-components';

const StyledList = styled.ul`
  width: 100%;
  overflow: auto;

  li {
    padding: 30px;

    &:not(:last-of-type) {
      border-bottom: 1px solid rgb(200, 200, 200);
    }
  }
`;

export default StyledList;
