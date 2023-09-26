import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: fixed;
  width:100%;
  top: 0;
  left: 1.3rem;
  z-index: 10;
  transition: all 0.3s ease-in;
  background-color: ${({ bgColor }) => bgColor};

`

export const Logo = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.white};
`

export const MenuIcon = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ size}) => size};
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;

`