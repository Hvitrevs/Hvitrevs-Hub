import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
  position:relative;
`

export const ShowcaseImageCard = styled.div`
  width: max-content;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
`

export const Particle = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom })=> bottom};
  
`