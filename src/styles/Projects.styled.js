import styled from "styled-components";

export const TechStackCard = styled.div`
    border-bottom: 1px solid hsl(212, 39.10%, 29.60%); 
    display: inline-block;
    background-color: transparent;
    color: #ff883e;
    padding: 0.3rem 0rem;
    border-radius: 5px;
    opacity: 70%;
    

    &:hover{
      
      opacity:100%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      margin-bottom: 1rem;
      font-size: small;
      padding: 0.3rem;

    }
`
export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  
`
export const ProjectImage = styled.img`
  border: 1px solid transparent;
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 35px;
  opacity:100%;
  padding: 1.5rem;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    width: 110%;
    margin-top: 2rem;
  }
`

export const  AppContainer = styled.div`
position: fixed;
display: inline-block;
opacity: 100%;
align-items: center;
top: 0;
overflow: auto; 
left: 0;
height: 100%;
width: 100%;
background-color: #040c1e;
z-index: 3;

`