import styled from 'styled-components';

const StyledList = styled.ul`
  width: 100%;
  height: 100px;
  overflow: auto;
  flex-grow: 1;

  li {
    margin: 0 30px;
    padding: 20px 10px;

    &:not(:last-of-type) {
      border-bottom: 1px solid var(--grey);
    }
  }
`;

export default StyledList;
