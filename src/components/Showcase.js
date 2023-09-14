import React from 'react';
import { PaddingContainer, Flexcontainer, Heading, ParaText, LeText, IconContainer } from '../styles/GlobalStyled';

const Showcase = () => {
  return (
    <PaddingContainer
      id= 'Home'
      left= '3%'
      right= '10%'
      top= '15%'
      bottom= '10%'
    > 

      <Flexcontainer align='center' fullWidthChild>
        <div>
          <Heading size='h5'>Hello</Heading>
        </div>
      </Flexcontainer>
    </PaddingContainer>
  )
}

export default Showcase