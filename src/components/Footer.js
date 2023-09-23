import React from 'react'
import { Flexcontainer, Heading, PaddingContainer } from '../styles/GlobalStyled'
import { ContactForm, FormInput } from '../styles/Footer.styled'

const Footer = () => {
  return (
    <PaddingContainer
      id='Contact'
      top='5%'
      bottom='10%'
    >
      <Heading as='h4' size='h1' align='center'>
        Contact        
      </Heading>
      <PaddingContainer top='3rem'>
        <Flexcontainer justify='center'>
          <ContactForm>
            <PaddingContainer
              bottom='2rem'>
                <FormInput
                  type='text'
                  placeholder='Your name'
                >
                
                </FormInput>

              </PaddingContainer>
          </ContactForm>
        </Flexcontainer>
      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer