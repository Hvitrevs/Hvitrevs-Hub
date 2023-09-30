import React, { useEffect, useState } from 'react'
import {  GiFoxHead } from 'react-icons/gi'
import { Container, Flexcontainer, LeText, PaddingContainer } from '../styles/GlobalStyled'
import { theme } from '../utils/Theme'
import { Logo, MenuIcon, NavbarContainer } from '../styles/Navbar.styled'
import NavMenu from './layouts/NavMenu'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
  
    window.addEventListener('scroll', onScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <NavbarContainer 
      bgColor={ sticky ? theme.colors.primary : 'transparent' }>
      <PaddingContainer top='1rem' bottom='1rem' responsiveRight='1rem'>
        <Container>
          <Flexcontainer justify='space-between' responsiveFlex>

            <Logo>
              Hvit<LeText>revs</LeText>
            </Logo>

            <MenuIcon size='2rem'
            onClick={() => { setOpenMenu(true) }}>
                <GiFoxHead />
              </MenuIcon>

          </Flexcontainer>
        </Container>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar