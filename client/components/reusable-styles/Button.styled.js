import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => (color || 'var(--yellow)')};
  border: 1px solid ${({ border }) => (border || 'var(--yellow)')};
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    transform: translateY(3px);
  }

  &:hover {
    background-color: rgb(255, 237, 158);
    border: 1px solid rgb(255, 237, 158);
    text-decoration: underline;
  }
`;

export default Button;
