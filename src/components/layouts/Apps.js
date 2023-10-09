import React from 'react'
import { Flexcontainer, Heading, LeText, PaddingContainer } from '../../styles/GlobalStyled'
import { motion } from 'framer-motion'
import { fadeInTopVariant } from '../../utils/Variants'
import { MenuIcon } from '../../styles/Navbar.styled'
import { AiOutlineClose } from 'react-icons/ai'
import { AppContainer } from '../../styles/Projects.styled'
import { Link } from 'react-router-dom'

const Apps = ( ) => {
  return (
    <AppContainer>
      <PaddingContainer  left='5%' right='5%' top='2rem'>
        <Flexcontainer justify='flex-end' responsiveFlex>
          <Link to='/app'>
          <MenuIcon  size='2rem' top='3rem' 
          >
            <AiOutlineClose />
          </MenuIcon>
          </Link>
        </Flexcontainer>
        
      </PaddingContainer>
      <PaddingContainer top='1rem'>
        <Flexcontainer
              direction='column'
              align='center'
              responsiveFlex
            >
              <Heading size='h4'as={motion.h4} variants={fadeInTopVariant} initial='hidden' whileInView='visible'>
                See what
              </Heading>
              <Heading as={motion.h1} variants={fadeInTopVariant} initial='hidden' whileInView='visible'  size='h1' top='1rem' bottom='1rem'>
              Apps <LeText>I've built🛸 </LeText> 
              </Heading>

            </Flexcontainer>
            
      </PaddingContainer>
    </AppContainer>
  )
}

export default Apps