import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: fixed;
  width:100%;
  top: 0;
  left: 2%;
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
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  }



`

export const NavLinksTop = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ size}) => size};
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    display: none;
  }

`

export const MenuItem = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  
`
export const MenuItemsText = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 3rem;
  
`


export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image:linear-gradient(to bottom,  hsla(222, 100.00%, 10.40%), hsla(236, 100.00%, 5.30%, 0.69));
  z-index: 1;
  
`

export const MenuHidden = styled.a`
  @media screen and (max-width: 1980px) {
    display: none;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2rem;
    cursor: pointer;
    text-decoration: none;
    display: flex;
  }
`


