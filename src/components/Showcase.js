import React from 'react';
import { PaddingContainer, Flexcontainer, Heading, ParaText, LeText, IconContainer, Smile } from '../styles/GlobalStyled';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import "../index.css"

const Showcase = () => {
  return (
    <PaddingContainer
      id= 'Home'
      left= '3%'
      right= '10%'
      top= '15%'
      bottom= '10%'
    > 

      <Flexcontainer  fullWidthChild>
        <div>
          <Heading size='h4'>Hello</Heading>
          <Heading size='h1' top='1rem' bottom='1rem'>I'm<LeText> Hvitrevs<Smile>🦊</Smile> </LeText> </Heading>

          <Heading size='h3' bottom='2rem' > I like building <LeText> web apps </LeText> </Heading>

          <ParaText as='h4' top='2rem'bottom='2rem'>
          I'm facinated with AI and Machine Learning.
          Currently I am working on designing and creating different user-friendly websites and applications. 
          </ParaText>
          <Flexcontainer top='1rem' bottom='1rem' gap='1.5rem'>
            <IconContainer color='white' size='1.5rem'>
              <BsGithub />
            </IconContainer>
            <IconContainer color='white' size='1.5rem'>
              <BsLinkedin />
            </IconContainer>
          </Flexcontainer>
        </div>
      </Flexcontainer>
    </PaddingContainer>
  )
}

export default Showcase