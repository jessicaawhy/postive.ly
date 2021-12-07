import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => (color || 'var(--light-yellow)')};
  border: 2px solid ${({ border }) => (border || 'var(--light-yellow)')};
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    transform: translateY(3px);
  }

  &:hover {
    background-color: var(--yellow);
    border: 2px solid var(--yellow);
  }
`;

export default Button;
