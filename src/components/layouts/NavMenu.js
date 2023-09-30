import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { MenuIcon, MenuItem, NavMenuContainer } from '../../styles/Navbar.styled';
import { Flexcontainer, PaddingContainer } from '../../styles/GlobalStyled';
import { navLinks } from '../../utils/Data';

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
      <PaddingContainer top='8%'>
        <Flexcontainer
          direction='column'
          align='center'
        >
          {navLinks.map((link) => (
              <MenuItem 
                href={`#${link.href}`} onClick={() => setOpenMenu(false)} color='grey'> {link.name}
              </MenuItem>
          ))}
        </Flexcontainer>
      </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu