import React from 'react'
import { Flexcontainer, Heading, LeText, PaddingContainer } from '../../styles/GlobalStyled'
import { motion } from 'framer-motion'
import { fadeInLeftVariantDelay, fadeInTopVariant } from '../../utils/Variants'
import { MenuIcon } from '../../styles/Navbar.styled'
import { AiOutlineClose } from 'react-icons/ai'
import { AppContainer } from '../../styles/Projects.styled'
import { Link } from 'react-router-dom'
import { appsDetails } from '../../utils/Data'
import AppsLayout from './AppsLayout'



const Apps = (  ) => {

  return (

    <AppContainer>
      <PaddingContainer  
        bottom='10%'
        left= '18%'
        right= '15%'
        responsiveTop='0'
        responsiveLeft='3rem'
        respoinsiveRight='1rem'
        responsiveBottom='4rem'
        position='fixed'
        >
        <Flexcontainer justify='flex-end'  responsiveFlex>
          <Link to='/app#Projects'>
          <MenuIcon as={motion.a} whileHover={{scale: 1.2}} size='1.2rem' top='4rem'
          >
            <AiOutlineClose />
          </MenuIcon>
          </Link>
        </Flexcontainer>
      </PaddingContainer>


        <PaddingContainer top='10rem'>
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
          <PaddingContainer 
          top='1rem' 
          left='1rem' 
          responsiveLeft='1rem'
          respoinsiveRight='4rem'>
          <Flexcontainer direction='column' align='center'>
            {appsDetails.map((project) =>(
          <motion.div 
          variants={fadeInLeftVariantDelay}
          initial='hidden'
          whileInView='visible'
          >
            <PaddingContainer responsiveLeft='2rem' respoinsiveRight='6rem' key={project.id} top='3rem' bottom='2rem' >
              <AppsLayout  data={project} />
            </PaddingContainer>
          </motion.div>
        ))}
          </Flexcontainer>
          
      </PaddingContainer>

    </motion.div>

    </AppContainer>
  );
}

export default Apps