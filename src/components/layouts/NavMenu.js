import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { MenuIcon, NavMenuContainer } from '../../styles/Navbar.styled';
import { Flexcontainer, PaddingContainer } from '../../styles/GlobalStyled';

const NavMenu = ({ setOpenMenu }) => {
  return (

    // close button for side menu
    <NavMenuContainer >
      <PaddingContainer left='5%' right='5%' top='2rem'>
        <Flexcontainer justify='flex-end'>
          <MenuIcon size='2rem' onClick = {() => setOpenMenu(false)}
            >
            <AiOutlineClose />
          </MenuIcon>
        </Flexcontainer>
      </PaddingContainer>
      {/* menu items */}
    </NavMenuContainer>
  )
}

export default NavMenu