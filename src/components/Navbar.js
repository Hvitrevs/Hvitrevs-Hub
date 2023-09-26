import React from 'react'
import { GiFox, GiFoxHead } from 'react-icons/gi'
import { Container, Flexcontainer, IconContainer, LeText, PaddingContainer } from '../styles/GlobalStyled'
import { theme } from '../utils/Theme'
import { Logo, MenuIcon, NavbarContainer } from '../styles/Navbar.styled'


const Navbar = () => {
  return (
    <NavbarContainer bgColor='transparent'>
      <PaddingContainer top='1rem' bottom='1rem'>
        <Container>
          <Flexcontainer justify='space-between'>

            <Logo>
              Hvit<LeText>revs</LeText>
            </Logo>

            <MenuIcon size='2rem'>
                <GiFoxHead />
              </MenuIcon>

          </Flexcontainer>
        </Container>
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar