import React from "react";
import { Routes , Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import  GlobalStyle  from "../components/theme/GlobalStyle"
import Theme from '../components/theme/index'

import Head from "../components/Header/Head";
import Main from "../components/Main/Main.tsx";
import Library from "../components/Library/Library.tsx";
import SongDetails from "../components/SongDetails/SongDetails.tsx";





function App() {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <Head appName={"Fetch Music"} />
      
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/tracks/:idTrack" element={<SongDetails />} />
        <Route path="/Biblioteca" element={<Library />}></Route>

      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
