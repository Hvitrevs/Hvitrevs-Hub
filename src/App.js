import React from "react";
import { MainBody } from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";

function App() {
  return (
    <ThemeProvider theme ={ theme }>
    <MainBody />
      
    </ThemeProvider>
  );
}

export default App;
