import React from "react";
import { Container, MainBody } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextSphereMobile from "./components/TextSphere/TextSphereMobile";


function App() {
  return (
    <ThemeProvider theme ={ theme }>
    <MainBody>
      <Container>
        <Navbar />
        <Showcase />
        <MySkills />
        <TextSphereMobile />
        <Projects />
        <Footer />
      </Container>
    </MainBody> 
      
    </ThemeProvider>
  );
}

export default App;
