import styled from "styled-components";

export const ContactForm = styled.form`
  width: 40%;

`
export const FormLabel = styled.p`
  color: ${({ theme }) => theme.colors.para_text_color};
  padding-bottom: 10px;
`
export const FormInput = styled.input`
  width:100%;
  background-color: transparent;
  border-bottom: 1px solid grey;
  border-radius: 5px;
  padding: 15px;
  color: ${({ theme }) => theme.colors.white};
`