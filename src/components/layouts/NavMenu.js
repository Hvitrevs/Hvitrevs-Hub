import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { MenuIcon, NavMenuContainer } from '../../styles/Navbar.styled';
import { Flexcontainer, PaddingContainer } from '../../styles/GlobalStyled';

const NavMenu = () => {
  return (
    <NavMenuContainer >
      <PaddingContainer left='5%' right='5%' top='2rem'>
        <Flexcontainer justify='flex-end'>
          <MenuIcon>
            <AiOutlineClose />
          </MenuIcon>
        </Flexcontainer>
      </PaddingContainer>

    </NavMenuContainer>
  )
}

export default NavMenu