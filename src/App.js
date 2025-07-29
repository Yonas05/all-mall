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
        <Route path="/container" element={<Container />} />
        <Route path='/slides' element={<SlideImages />} />
        <Route path='/kid_display' element={<PetDisplay />} />
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
