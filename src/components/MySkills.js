import React from 'react'
import { Flexcontainer, PaddingContainer, Heading, IconContainer, ParaText, LeText   } from '../styles/GlobalStyled'
import { SkillCard, SkillsCardContainer } from '../styles/MySkills.styled'
import { Skills } from '../utils/Data'



const MySkills = () => {
  return (
    <PaddingContainer 
      id=' Skills'
      top=' 10%'
      bottom='10%'
    >
      <Heading align='center' size='h1' bottom='3rem'> SKILLS</Heading>
       
      <Flexcontainer fullWidthChild>
       

        {/* left side */}


        <SkillsCardContainer>
          {Skills.map((skill) => (
            <SkillCard>
              <IconContainer size='7rem' color='le' >
                {skill.icon}
              </IconContainer>
              <Heading as='h4' size='h4'>
                {skill.tech}
              </Heading>
            </SkillCard>
          ))}
        </SkillsCardContainer>

        {/* right side */}


        <div>

          <Heading  size='h2' top='0,5rem'>
           WHAT <LeText> I do and familiar with</LeText>
          </Heading>
          <ParaText as='h4' top='2rem' bottom='1.5rem' right='1rem'>
          I have hands-on experience with a variety of projects, from e-commerce platforms to data-driven web applications.
          </ParaText>
          <ParaText  top='2rem' bottom='1.5rem' right='1rem'>
          I like creating interactive front-end interfaces using React and even do some server side with Node.js and MongoDB. 
          </ParaText>
          <ParaText  top='2rem' bottom='1.5rem' right='1rem'>
          I bring AI-powered intelligence to web development, enhancing user experiences through technologies like machine learning and natural language processing.
          </ParaText>

        </div>
      </Flexcontainer>
    </PaddingContainer>
  )
}

export default MySkills