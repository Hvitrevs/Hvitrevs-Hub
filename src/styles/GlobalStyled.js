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
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right};
  
  `

  export const Flexcontainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    flex-direction: ${({ direction }) => direction}; 

// if we add a prop of fullwidthchild to flex container then it's child div will have a flex 1 prop ->

    & > div {
      flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    }
  `

  // wrap the padding container component inside the the styled constructor so the heafer component will be using properties of of the padding container (paddint-top, padding-bottom, etc)

  export const Heading = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.white};
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => {
      switch(size){
        case 'h1':
          return '4.5rem';
        
        case 'h2':
          return '3rem';
        

        case 'h3':
          return '2rem';
        
        case 'h4':
          return '1.2 rem';

        
        default:
          return;


      }

    }}
  `