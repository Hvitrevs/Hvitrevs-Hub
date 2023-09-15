import styled from "styled-components";


export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  padding: 0 5%;

`

export const SkillCard = styled.div`
  width: 200px;
  // border: 1px solid hsla(212, 41.70%, 24.90%, 0.65);
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:linear-gradient(to top,  hsla(206, 91.30%, 9.00%, 0.00), hsla(212, 67.40%, 16.90%, 0.11));
  
`