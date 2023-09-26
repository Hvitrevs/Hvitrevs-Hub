import React from 'react'
import { GiFox } from 'react-icons/gi'
import { Container, Flexcontainer, IconContainer, PaddingContainer } from '../styles/GlobalStyled'
import { theme } from '../utils/Theme'
import { NavbarContainer } from '../styles/Navbar.styled'


const Navbar = () => {
  return (
    <NavbarContainer bgColor='transparent'>
      <PaddingContainer top='1rem' bottom='1rem'>
        <Container>
          <Flexcontainer justify='space-between'>
            

          </Flexcontainer>
        </Container>
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar