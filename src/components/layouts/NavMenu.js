import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import {  MenuIcon,  MenuItemsText, NavMenuContainer } from '../../styles/Navbar.styled';
import { Flexcontainer, PaddingContainer } from '../../styles/GlobalStyled';
import { navLinks } from '../../utils/Data';
import { motion } from 'framer-motion';
import { fadeInTopVariant } from '../../utils/Variants';
import '../../index.css';





const NavMenu = ({ setOpenMenu }) => {
  return (

    // close button for side menu
    <NavMenuContainer as={motion.div} variants={fadeInTopVariant} initial='hidden' animate='visible' exit='exit'>
      <PaddingContainer left='5%' right='5%' top='2rem'>
        <Flexcontainer justify='flex-end' responsiveFlex>

            <MenuIcon as={motion.a} whileHover={{scale: 1.2}} size='2rem' onClick = {() => setOpenMenu(false)}
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
          responsiveFlex
        >
          {navLinks.map((link) => (
              <MenuItemsText
                as={motion.a}
                whileHover={{scale: 1.2}}
                key={link.id}
                href={`#${link.href}`} onClick={() => setOpenMenu(false)} > {link.name}
              </MenuItemsText>
          ))}
        </Flexcontainer>
      </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu