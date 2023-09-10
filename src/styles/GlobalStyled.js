import styled from "styled-components";


export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};


`

export const Container = styled.div`

  width: 90%;
  max-width: 1280px;
  margin: auto;
  
  `

  export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  
  `