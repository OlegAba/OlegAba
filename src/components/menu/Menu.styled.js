import styled from 'styled-components';

export const StyledMenu = styled.nav`
  padding-top: 120px;
  background: red;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100%;
  width: 250px;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  div {
    display: flex;
    flex-direction: column;
    background-color: yellow;
  }

  a {
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;