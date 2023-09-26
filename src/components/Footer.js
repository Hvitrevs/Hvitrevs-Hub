import React from 'react'
import { Button, Flexcontainer, Heading, LeText, PaddingContainer } from '../styles/GlobalStyled'
import { ContactForm, FormInput, FormLabel } from '../styles/Footer.styled'


// buiding contact form

const Footer = () => {
  return (
    <PaddingContainer
      id='Contact'
      top='12%'
      bottom='10%'
    >
      <Heading as='h4' size='h1' align='center'>
        Contact <LeText>me 📨 </LeText>     
      </Heading>
      {/* adding fields */}
      <PaddingContainer top='3rem'>
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
                <FormInput bgColor1='#081228'
                  as='textarea'
                  placeholder='Enter Your Message'
                >
                </FormInput>
            </PaddingContainer>

            <Flexcontainer justify="center" >
              <Button >✉️</Button>
            </Flexcontainer>
            
          </ContactForm>
        </Flexcontainer>
      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer