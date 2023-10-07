import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
  position:relative;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const ShowcaseImageCard = styled.div`
width: max-content;
margin-bottom: 2rem;
position: relative;
overflow: hidden;


@media screen and (max-width: 768px) {
  width: 100%; 
  display: flex;
  flex-direction: column-reverse; 
}

}
`



