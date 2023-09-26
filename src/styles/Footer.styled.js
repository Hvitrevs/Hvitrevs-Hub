import styled from "styled-components";

export const ContactForm = styled.form`
  padding-top: 2rem;
  width: 40%;

`
export const FormLabel = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 10px;
`
export const FormInput = styled.input`
  width: 100%;
  border: none;
  background-color: ${({ bgColor1 }) => bgColor1};
  border-bottom: 1px solid #d57c3d;
  border-radius: 5px;
  padding: 15px;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-family: ubuntu;

  &::placeholder{
    color: ${({ theme }) => theme.colors.para_text_color};
    letter-spacing: 0.1rem;
    font-weight: normal;
    
  }


`