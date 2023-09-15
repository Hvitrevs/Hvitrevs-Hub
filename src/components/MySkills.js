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
            WHAT <LeText> I use and familiar with:</LeText>
          </Heading>
          <ParaText  top='2rem' bottom='1.5rem' right='1rem'>
            Depending on the project I prefer to use one or several of the programing languages
            <IconContainer top='0.5rem' >
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
            </IconContainer>
            add extra functionality and speed to it with 
            <IconContainer top='0.5rem'>
  
                <img src="https://raw.githubusercontent.com/stephencorwin/stephencorwin/master/resources/typescript-logo.png" alt="git" width="40" height="40"/>
                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> 
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/>
                <img src="https://vitejs.dev/logo.svg" alt="javascript" width="40" height="40"/>
            </IconContainer>
            design original assets and whole layouts, using
            <IconContainer top='0.5rem'>
                <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40"/>
                <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="blender" width="40" height="40"/>
                <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
                <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> 
                <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/>
                <img src="https://media.inkscape.org/static/images/inkscape-logo.svg" width="40" height="40" alt="Inkscape"/>

            </IconContainer>
            work with hosting, data management and server mainly with
            <IconContainer top='0.5rem'>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"  width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
            </IconContainer>
            coding in different operating systems
            <IconContainer top='0.5rem'>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Windows_11_logo.svg" alt="linux" width="40" height="40"/>
            </IconContainer>
          </ParaText>

        </div>
      </Flexcontainer>
    </PaddingContainer>
  )
}

export default MySkills