import styled from 'styled-components';

const ButtonLink = styled.a`
  --bg: ${({ color }) => (color ? `rgb(${color.r}, ${color.g}, ${color.b})` : 'rgb(255, 255, 255)')};
  background-color: var(--bg);
  border: 1px solid var(--bg);
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 15px;
  color: black;
  text-decoration: none;
`;

export default ButtonLink;
