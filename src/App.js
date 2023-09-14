import React from "react";
import { Container, MainBody } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import Showcase from "./components/Showcase";

function App() {
  return (
    <ThemeProvider theme ={ theme }>
    <MainBody>
      <Container>
        <Showcase />
      </Container>
    </MainBody> 
      
    </ThemeProvider>
  );
}

export default App;
