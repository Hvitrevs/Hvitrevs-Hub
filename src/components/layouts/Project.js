import React from 'react'
import { Button, Flexcontainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../styles/GlobalStyled'
import { FaGithubAlt } from 'react-icons/fa6'
import {  PiFlyingSaucer } from 'react-icons/pi'
import { TechStackCard } from '../../styles/Projects.styled'

const Project = () => {
  return (
    <Flexcontainer fullWidthChild>
      {/* left side of project section */}
      <div>
        <Flexcontainer align='center' gap='1rem'>
          <Heading as='h3' size='h3' bottom='1rem'>
            Project Name
          </Heading>
          <IconContainer color='le' size='1.5rem' bottom='0.5rem'>
            <FaGithubAlt />
            <PiFlyingSaucer />
          </IconContainer>
        </Flexcontainer>
        <PaddingContainer top='1rem'>
          <Flexcontainer gap='1.5rem'>
            <TechStackCard> Technology</TechStackCard>
            <TechStackCard> Technology</TechStackCard>
          </Flexcontainer>
        </PaddingContainer>
        <ParaText top='1.5rem' bottom='2rem'>
          Project Description
        </ParaText>
        <Button>See live</Button>
      </div>

    </Flexcontainer>
  )
}

export default Project