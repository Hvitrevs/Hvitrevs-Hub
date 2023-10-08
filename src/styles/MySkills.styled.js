import styled from "styled-components";


export const SkillsCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  padding: 0 5%;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    grid-gap: 1rem;
    padding: 0;
  }

`

export const SkillCard = styled.div`
  width: 200px;
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:linear-gradient(to top,  hsla(206, 91.30%, 9.00%, 0.00), hsla(212, 67.40%, 16.90%, 0.11));
  


  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    width: 130px;
    padding: 2rem;
    display: flex;
    margin-top: 2rem;
    

  }
`

export const ContactCardContainer = styled.div`
  display: ${({ grid }) => grid};
  grid-template-columns: auto auto;
  grid-gap: 2rem;
  padding: 0rem 5rem;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    display: grid;
    gap: 1rem;
    padding: 0;
  }

`

export const ContactCard = styled.div`
  width: 250px;
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:linear-gradient(to top,  hsla(206, 91.30%, 9.00%, 0.00), hsla(212, 67.40%, 16.90%, 0.11));
  


  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    width: 140px;
    padding: 1rem;
    gap: 1rem;
    margin-top: 2rem;

        

  }
`