import React from 'react'
import { Flexcontainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../styles/GlobalStyled'
import { FaGithubAlt } from 'react-icons/fa6'
import {  PiFlyingSaucer } from 'react-icons/pi'
import { ProjectImage, ProjectImageContainer, TechStackCard } from '../../styles/Projects.styled'
import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'
import { MenuIcon } from '../../styles/Navbar.styled'
import { Link } from 'react-router-dom'

const AppsLayout = ({ data }) => {
  return (
    <Flexcontainer
    direction={data.reverse ? 'row-reverse': false}
    fullWidthChild>


      {/* left side of project section */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial='hidden'
        whileInView='visible'
      >
        <Flexcontainer  gap='1rem'>
          <Heading as='h3' size='h3' bottom='1rem'>
            {data.project_name}
          </Heading>
        </Flexcontainer>
        <PaddingContainer top='1rem'>
          <Flexcontainer gap='1rem'>
            {data.tech_stack.map((stack) => (
              <TechStackCard> {stack}</TechStackCard>
            ))}
            
          </Flexcontainer>
        </PaddingContainer>
        <ParaText top='1rem' bottom='1rem'>
          {data.app_desc}
        </ParaText>

        {/* icons */}
        <IconContainer  color='le' size='1.5rem' top='1rem'  bottom='0.5rem'>

          <Link to={data.app_page}>

              <MenuIcon as={motion.a} whileHover={{scale: 1.2}} gap='1rem'>
                <FaGithubAlt />
              </MenuIcon>
          </Link>
          <Link to={data.app_url}>
                <MenuIcon as={motion.a} whileHover={{scale: 1.2}} gap='1rem'>
                  <PiFlyingSaucer />
                </MenuIcon>
          </Link>
        </IconContainer>
      </motion.div>

      
      {/* right side of app section */}

      <ProjectImageContainer as={motion.div} justify={data.reverse ? 'flex-start': 'flex-end'} initial='hidden' whileInView='visible'>
        <ProjectImage src={data.app_img} />


      </ProjectImageContainer>

    </Flexcontainer>
  )
}

export default AppsLayout