import React, { useState } from 'react'
import {  GiFoxHead } from 'react-icons/gi'
import { Container, Flexcontainer, LeText, PaddingContainer } from '../styles/GlobalStyled'
import { theme } from '../utils/Theme'
import { Logo, MenuIcon, NavbarContainer } from '../styles/Navbar.styled'
import NavMenu from './layouts/NavMenu'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavbarContainer bgColor='transparent'>
      <PaddingContainer top='1rem' bottom='1rem'>
        <Container>
          <Flexcontainer justify='space-between'>

            <Logo>
              Hvit<LeText>revs</LeText>
            </Logo>

            <MenuIcon size='2rem'
            onClick={() => { setOpenMenu(true) }}>
                <GiFoxHead />
              </MenuIcon>

          </Flexcontainer>
        </Container>
        {openMenu && <NavMenu />}
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar