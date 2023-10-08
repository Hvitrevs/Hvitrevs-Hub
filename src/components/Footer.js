import React from 'react'
import { Button, Flexcontainer, Heading, LeText, PaddingContainer } from '../styles/GlobalStyled'
import { ContactForm, FormInput, FormLabel } from '../styles/Footer.styled'
import { motion } from 'framer-motion'
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

// buiding contact form

const Footer = () => {
  return (
    <PaddingContainer
      id='Contact'
      top='12%'
      bottom='10%'
    >
      <Heading as={motion.div} variants={fadeInBottomVariant} initial='hidden' whileInView='visible' size='h1' align='center'>
        Contact <LeText>me 📨 </LeText>     
      </Heading>



      {/* right side contact form */}


      <PaddingContainer top='3rem' as={motion.div} variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
        <Flexcontainer justify='center'>
          <ContactForm>

            <PaddingContainer
              bottom='2rem'>
                <FormLabel>
                  Name:
                </FormLabel>
                <FormInput bgColor1='transparent'
                  type='text'
                  placeholder='Your name'
                >
                </FormInput>
            </PaddingContainer>

            <PaddingContainer
              bottom='2rem'>
                <FormLabel>
                  Email:
                </FormLabel>
                <FormInput bgColor1='transparent'
                  type='text'
                  placeholder='Your Email'
                >
                </FormInput>
            </PaddingContainer>

            <PaddingContainer
              bottom='2rem'>
                <FormLabel>
                  Subject:
                </FormLabel>
                <FormInput bgColor1='transparent'
                  type='text'
                  placeholder='Subject'
                >
                </FormInput>
            </PaddingContainer>

            <PaddingContainer
              bottom='2rem'>
                <FormLabel>
                  Message:
                </FormLabel>
                <FormInput bgColor1='#070f23'
                  as='textarea'
                  height='150px'
                  placeholder='Enter Your Message'
                >
                </FormInput>
            </PaddingContainer>

            <Flexcontainer justify="center">
              <Button >📩</Button>
            </Flexcontainer>
            
          </ContactForm>
        </Flexcontainer>
      </PaddingContainer>

      {/* left side contact info boxes  */}

      <PaddingContainer top='3rem' as={motion.div} variants={fadeInLeftVariant} initial='hidden' whileInView='visible'>


      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer