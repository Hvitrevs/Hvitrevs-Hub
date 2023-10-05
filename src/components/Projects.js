import React from 'react';
import { Button, Heading, LeText, PaddingContainer } from '../styles/GlobalStyled';
import { projectDetails } from '../utils/Data';
import Project from './layouts/Project';
import { motion } from "framer-motion";
import {  fadeInTopVariant } from '../utils/Variants';

const Projects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop='20%'
      responsiveLeft='1rem'
      respoinsiveRight='1rem'
      >
      <Heading size='h4'as={motion.h4} variants={fadeInTopVariant} initial='hidden' whileInView='visible'>
        See what
      </Heading>
      <Heading as={motion.h1} variants={fadeInTopVariant} initial='hidden' whileInView='visible'  size='h1' top='1rem' bottom='1rem'>
        Apps <LeText>I've built🛸 </LeText> 
      </Heading>

      
      {projectDetails.map((project) =>(
        <PaddingContainer key={project.id} top='3rem' bottom='3rem'>
          <Project data={project} />
        </PaddingContainer>
      ))}

      <Button>➜</Button>
    </PaddingContainer>
  ) 

}

export default Projects