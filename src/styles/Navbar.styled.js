import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: fixed;
  width:100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.3s ease-in;
  background-color: ${({ bgColor }) => bgColor};
`