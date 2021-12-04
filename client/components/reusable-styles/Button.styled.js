import styled from 'styled-components';

const Button = styled.button`
  --bg: ${({ color }) => (color ? `rgb(${color.r}, ${color.g}, ${color.b})` : 'rgb(255, 255, 255)')};
  background-color: var(--bg);
  border: 1px solid var(--bg);
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    transform: translateY(3px);
  }
`;

export default Button;
