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
      <Flexcontainer fullWidthChild>

        {/* left side */}
        <SkillsCardContainer>
          {Skills.map((skill) => (
            <SkillCard>
              <IconContainer size='5rem' color='le' >
                {skill.icon}

              </IconContainer>
              <Heading as='h4' size='h4'>
                {skill.tech}
              </Heading>
            </SkillCard>
          ))}

        </SkillsCardContainer>
        <div>

        </div>
      </Flexcontainer>
    </PaddingContainer>
  )
}

export default MySkills