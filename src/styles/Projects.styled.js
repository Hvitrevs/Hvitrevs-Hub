import styled from "styled-components";

export const TechStackCard = styled.div`
    display: inline-block;
    background-color: transparent;
    color: #ff883e;
    padding: 0.3rem 0rem;
    border-radius: 5px;
    opacity: 70%;

    &:hover{
      
      opacity:100%;
    }
`
export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
`
export const ProjectImage = styled.img`
  border: 1px solid transparent;
  width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  opacity:60%;

  &:hover{
      
    opacity:100%;
  }


`