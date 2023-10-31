import React, { useEffect, useState } from 'react'
import {  GiFoxHead } from 'react-icons/gi'
import { Container, Flexcontainer, LeText, PaddingContainer } from '../styles/GlobalStyled'
import { Logo, MenuHidden,  MenuItem,  NavLinksTop,  NavbarContainer } from '../styles/Navbar.styled'
import NavMenu from './layouts/NavMenu'
import { AnimatePresence , motion } from 'framer-motion'
import { navIcons } from '../utils/Data'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    };
  
    window.addEventListener('scroll', onScroll);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <NavbarContainer 
      bgColor='transparent'>
      <PaddingContainer top='1rem' bottom='1rem' responsiveRight='1rem'>
        <Container>
          <Flexcontainer justify='space-between' responsiveFlex>


            {/* site logo */}

            <Logo>
              Hvit<LeText>revs</LeText>
            </Logo>

            {/* site icon links */}

            <NavLinksTop>
              {navIcons.map((link) => (
                <MenuItem
                  as={motion.a}
                  whileHover={{scale: 1.2}}
                  key={link.id}
                  href={`/app#${link.href}`} onClick={() => setOpenMenu(false)} color='orange'
                > 
                  {link.name}
                </MenuItem>
              ))}
            </NavLinksTop>

            {/* corner icon for mobile view */}

            <MenuHidden as={motion.a} whileHover={{scale: 1.2}} size='2rem'
            onClick={() => { setOpenMenu(true) }}>
                <GiFoxHead />
              </MenuHidden>

          </Flexcontainer>
        </Container>
        <AnimatePresence>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>
        
      </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar