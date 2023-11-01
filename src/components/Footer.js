import React, { useRef } from 'react'
import { Flexcontainer, Heading, IconContainer, LeText, PaddingContainer } from '../styles/GlobalStyled'
import { motion } from 'framer-motion'
import { fadeInBottomVariant, fadeInLeftVariant, fadeInLeftVariantDelay, fadeInRightVariant } from '../utils/Variants'
import { ContactCard, ContactCardContainer } from '../styles/MySkills.styled'
import { Contacts } from '../utils/Data'
import emailjs from '@emailjs/browser'

// buiding contact form

const Footer = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_7pldyxd', 'template_j9mxg3k', form.current, 't0SFH_w25eWZFnpKn')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
      e.target.reset()
  }


  return (
    <PaddingContainer 
      id='Contact'
      top=' 10%'
      bottom='10%'
      responsiveLeft='1rem'
      responsiveRight='1rem'
    >
      <Heading size='h4' as={motion.h4} variants={fadeInBottomVariant} initial='hidden' whileInView='visible' align='center'>
        Have questions <LeText>or ideas? </LeText>  
      </Heading>
      <Heading as={motion.div} variants={fadeInBottomVariant} initial='hidden' whileInView='visible' size='h1'align='center'>
        Contact <LeText>me 📨 </LeText>     
      </Heading>
      <Flexcontainer responsiveFlex responsiveDirection='column-reverse' fullWidthChild>
      {/* General header */}




      {/* right side contact form */}




      <PaddingContainer top='3rem' as={motion.div} variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
        <Flexcontainer justify='center'>
        <form ref={form} onSubmit={sendEmail}>
              <input 
              type='text'
              placeholder='Enter your name'
              name='user_name'
              required />
                      
              <input 
              type='email'
              placeholder='Enter your email'
              name='user_email'
              required />

              <input 
              type='text'
              placeholder='subject'
              name='subject'
              required />

              <input 
              type='textarea'
              placeholder='message'
              name='message'
              required />
              <button type='submit'>📩</button>
            </form>
        </Flexcontainer>
      </PaddingContainer>

      {/* left side contact info boxes  */}

      <PaddingContainer top='3rem' as={motion.div} variants={fadeInLeftVariant} initial='hidden' whileInView='visible'>
        <Flexcontainer gap='1rem' top='1rem' bottom='1rem'>
          <motion.div>
          <ContactCardContainer
          as={motion.div}
          variants={fadeInLeftVariantDelay}
          initial='hidden'
          whileInView='visible'
        >
          {Contacts.map((skill) => (
            <ContactCard>
              <IconContainer size='6rem' color='le' >
                {skill.icon}
              </IconContainer>
              <Heading as='h5' size='h5' top='3rem'>
                {skill.tech}
              </Heading>
            </ContactCard>
          ))}
        </ContactCardContainer>
          </motion.div>
        </Flexcontainer>


      </PaddingContainer>
      </Flexcontainer>

    </PaddingContainer>
  )
}

export default Footer