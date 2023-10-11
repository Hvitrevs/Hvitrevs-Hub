import React from 'react'
import { Flexcontainer, Heading, LeText, PaddingContainer } from '../../styles/GlobalStyled'
import { motion } from 'framer-motion'
import { fadeInLeftVariantDelay, fadeInTopVariant } from '../../utils/Variants'
import { MenuIcon } from '../../styles/Navbar.styled'
import { AiOutlineClose } from 'react-icons/ai'
import { AppContainer } from '../../styles/Projects.styled'
import { Link } from 'react-router-dom'



const Apps = ( ) => {

  return (

    <AppContainer>
      <PaddingContainer  
        bottom="5%"
        left= '5%'
        right= '13%'
        responsiveTop='2rem'
        responsiveLeft='1.5rem'
        respoinsiveRight='1rem'
        responsiveBottom='4rem'
        >
        <Flexcontainer justify='flex-end' responsiveFlex>
          <Link to='/app'>
          <MenuIcon  size='2rem' top='4rem' 
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
      
      <motion.div
        variants={fadeInLeftVariantDelay}
        initial='hidden'
        whileInView='visible'
      >
        <PaddingContainer>
          <Flexcontainer>
            <Heading>

            </Heading>
          </Flexcontainer>
        </PaddingContainer>

      </motion.div>

    </AppContainer>
  );
}

export default Apps