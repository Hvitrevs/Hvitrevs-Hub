import React from 'react';
import { Button, Heading, LeText, PaddingContainer } from '../styles/GlobalStyled';
import { projectDetails } from '../utils/Data';
import Project from './layouts/Project';
import {  motion } from "framer-motion";
import {  fadeInLeftVariantDelay, fadeInTopVariant } from '../utils/Variants';
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      left= '3%'
      right= '5%'
      responsiveTop='2rem'
      responsiveLeft='1.5rem'
      respoinsiveRight='1rem'
      responsiveBottom='4rem'
      >

        {/* main header */}

      <Heading size='h4'as={motion.h4} variants={fadeInTopVariant} initial='hidden' whileInView='visible'>
        See what
      </Heading>
      <Heading as={motion.h1} variants={fadeInTopVariant} initial='hidden' whileInView='visible'  size='h1' top='1rem' bottom='1rem'>
        Apps <LeText>I've built🛸 </LeText> 
      </Heading>

      {/* container behavior */}
      
      {projectDetails.map((project) =>(
        <motion.div
        variants={fadeInLeftVariantDelay}
        initial='hidden'
        whileInView='visible'
        >
        <PaddingContainer  key={project.id} top='3rem' bottom='2rem'>
          <Project  data={project} />
        </PaddingContainer>
        </motion.div>
      ))}


      {/* button  */}

      <motion.div
        variants={fadeInLeftVariantDelay}
        initial='hidden'
        whileInView='visible'
        > <Link  to='/more-apps'style={{ textDecoration: 'none' }}>
          <Heading as={motion.h4} variants={fadeInTopVariant}initial='hidden' whileInView='visible'  size='h4' top='1rem' bottom='2rem'>See more</Heading>

          
              <Button>➜</Button> 
          </Link>

      </motion.div>
    </PaddingContainer>
  ) 

}

export default Projects