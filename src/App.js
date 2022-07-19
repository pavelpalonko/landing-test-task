import React from "react";
import './main.css'
import Header from "./component/UI/Header/Header";
import Footer from "./component/UI/Footer/Footer";
import MainPage from "./page/MainPage"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      "sans-serif"
    ].join(",")
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <MainPage />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
