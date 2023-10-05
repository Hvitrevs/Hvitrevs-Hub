import React from 'react';
import { PaddingContainer, Flexcontainer, Heading, ParaText, LeText, IconContainer } from '../styles/GlobalStyled';
import { FaGithubAlt, FaCodepen,  } from 'react-icons/fa6'
import { CiLinkedin  } from 'react-icons/ci'
import "../index.css"
import { ShowcaseImageCard, ShowcaseParticleContainer } from '../styles/Showcase.styled';
import ShowcaseImg from '../assets/abstract1.png';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';




const Showcase = () => {
  return (
    <PaddingContainer
      id= 'Home'
      left= '3%'
      right= '5%'
      top= '15%'
      bottom= '10%'
      responsiveLeft='1rem'
      responsiveRight='1rem'
      responsiveTop='8rem'
    > 

      <Flexcontainer  fullWidthChild>

        {/* left container */}
        <motion.div
          variants={fadeInLeftVariant}
          initial='hidden'
          whileInView='visible'
        >
          <Heading size='h4'>Hello!</Heading>
          <Heading as='h1' size='h1' top='1rem' bottom='1rem'>I'm<LeText> Hvitrevs🦊 </LeText> </Heading>

          <Heading as='h1' size='h3' bottom='2rem' > I like building <LeText> web apps </LeText> </Heading>

          <ParaText as='h4' top='2rem'bottom='2rem'>
          I am facinated with AI and Machine Learning.
          Currently I am working on designing and creating different user-friendly websites and applications. 
          </ParaText>
          <Flexcontainer top='1rem' bottom='1rem' gap='1.5rem' responsiveFlex>
            <IconContainer color='white' size='1.5rem'>
              <FaGithubAlt />
            </IconContainer>
            <IconContainer color='le' size='1.5rem'>
              <FaCodepen />
            </IconContainer>
            <IconContainer color='white' size='1.5rem'>
              <CiLinkedin />
            </IconContainer>
          </Flexcontainer>
          
        </motion.div>
        {/* right container */}
        <Flexcontainer 
          as={motion.div}
          variants={fadeInRightVariant}
          initial='hidden'
          whileInView='visible'
          justify='end'>
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImg} alt='showcaseImg' />
            </ShowcaseImageCard>

          </ShowcaseParticleContainer>
        </Flexcontainer>
      </Flexcontainer>
    </PaddingContainer>
  )
}

export default Showcase