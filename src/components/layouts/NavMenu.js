import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { MenuIcon, MenuItem, NavMenuContainer } from '../../styles/Navbar.styled';
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
      <PaddingContainer top='8%'>
        <Flexcontainer
          direction='column'
          align='center'
        >
          <MenuItem href='#Home' onClick={() => setOpenMenu(false)} color='grey'> Home page
          </MenuItem>
          <MenuItem href='#Skills' onClick={() => setOpenMenu(false)} color='grey'> Skills
          </MenuItem>
          <MenuItem href='#Projects' onClick={() => setOpenMenu(false)} color='grey'> Apps I've built
          </MenuItem>
          <MenuItem href='#Contact' onClick={() => setOpenMenu(false)} color='grey'> Contacts
          </MenuItem>
        </Flexcontainer>
      </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu