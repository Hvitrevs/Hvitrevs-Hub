import React from 'react'
import { Flexcontainer, PaddingContainer, Heading, IconContainer, ParaText, LeText   } from '../styles/GlobalStyled'
import { SkillsCardContainer } from '../styles/MySkills.styled'
import { Skills } from '../utils/Data'



const MySkills = () => {
  return (
    <PaddingContainer 
      id=' Skills'
      top=' 10%'
      bottom='10%'
    >
      <Flexcontainer fullWidthChild>
        <SkillsCardContainer>
          {Skills.map((skill) => (
            <div>{skill.tech}</div>
          ))}

        </SkillsCardContainer>
        <div>

        </div>
      </Flexcontainer>
    </PaddingContainer>
  )
}

export default MySkills