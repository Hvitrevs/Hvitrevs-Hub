import React from 'react';
import { Heading, LeText, PaddingContainer } from '../styles/GlobalStyled';
import { projectDetails } from '../utils/Data';
import Project from './layouts/Project';

const Projects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
    >
      <Heading size='h4'>
        Showcase
      </Heading>
      <Heading as='h1' size='h1' top='1rem' bottom='1rem'>
        Apps <LeText>I've built🛸 </LeText> 
      </Heading>

      
      {projectDetails.map((project) =>(
        <PaddingContainer key={project.id} top='5rem' bottom='5rem'>
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  ) 

}

export default Projects