import React from "react";
import { Container, MainBody } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route,  Routes} from 'react-router-dom';
import Apps from "./components/layouts/Apps";



function App() {

  
  return (
    <BrowserRouter>
    <ThemeProvider theme ={ theme }>
    <MainBody>
      <Routes>
      <Route path='' element={ <MainBody / >} />
      <Route path='/more-apps' element={<Apps />} />
      </Routes>
      <Container>
        <Navbar />
        <Showcase />
        <MySkills />
        <Projects />a
        <Footer />
      </Container>
    </MainBody> 
    </ThemeProvider>
    </BrowserRouter>
    

  );
}

export default App;
