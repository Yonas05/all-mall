// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import { createTheme } from '@mui/material';
import NavBar from './components/NavBar';
import Home  from './components/Home';
import SlideImages from './components/SlideImage';
import Footer from './components/Footer';
import PetDisplay from './components/Category/Pets';
import { ThemeProvider } from '@emotion/react';
import Kid_Display from './components/Category/Kids';
import GetManDetail from './components/Detail/Men_Details';
import Pet_Detail from './components/Detail/Pet_Detail';
function App() {
  const theme = createTheme({
      typography: {
          fontFamily: "'Ubuntu', sans-serif",
          fontSize: 10
      },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      {/* Navigation Bar */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pet-display' element={<PetDisplay/>}/>
        <Route path ='pets' element={<Pet_Detail/>}/>
        <Route path="/container" element={<Container />} />
        <Route path='/slides' element={<SlideImages />} />
        <Route path="/men" element={<GetManDetail/>}/>
        <Route path='/kids_display' element={<Kid_Display />} />
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
