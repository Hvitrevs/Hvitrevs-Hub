import React from 'react'
import { Flexcontainer, Heading, IconContainer } from '../../styles/GlobalStyled'
import { FaGithubAlt } from 'react-icons/fa6'
import {  PiFlyingSaucer } from 'react-icons/pi'

const Project = () => {
  return (
    <Flexcontainer fullWidthChild>
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
      </div>

    </Flexcontainer>
  )
}

export default Project