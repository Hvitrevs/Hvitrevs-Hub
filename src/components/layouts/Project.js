import React from 'react'
import { Button, Flexcontainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../styles/GlobalStyled'
import { FaGithubAlt } from 'react-icons/fa6'
import {  PiFlyingSaucer } from 'react-icons/pi'
import { ProjectImage, ProjectImageContainer, TechStackCard } from '../../styles/Projects.styled'
import Desktop2 from '../../assets/desktop2.png'

const Project = ({ data }) => {
  return (
    <Flexcontainer fullWidthChild>
      {/* left side of project section */}
      <div>
        <Flexcontainer align='center' gap='1rem'>
          <Heading as='h3' size='h3' bottom='1rem'>
            {data.project_name}
          </Heading>
        </Flexcontainer>
        <PaddingContainer top='1rem'>
          <Flexcontainer gap='1.5rem'>
            {data.tech_stack.map((stack) => (
              <TechStackCard> {stack}</TechStackCard>
            ))}
            
          </Flexcontainer>
        </PaddingContainer>
        <ParaText top='1.5rem' bottom='2rem'>
          {data.project_desc}
        </ParaText>
        <IconContainer color='le' size='1.5rem' top='1rem' gap='1rem' bottom='0.5rem'>
            <FaGithubAlt />
            <PiFlyingSaucer />
          </IconContainer>
      </div>
      {/* right side of project section */}

      <ProjectImageContainer justify='flex-end'>
        <ProjectImage src={data.project_img} />


      </ProjectImageContainer>

    </Flexcontainer>
  )
}

export default Project