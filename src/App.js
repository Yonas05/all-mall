// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import { createTheme } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SlideImages from './components/SlideImage';
import Footer from './components/Footer';
import { ThemeProvider } from '@emotion/react';


import GetManDetail from './components/Detail/Men_Details';
import PetDetail from './components/Detail/Pet_Detail';
import KidDetails from './components/Detail/Kid_Detail';
import WomenDetails from './components/Detail/Women_Detail';
import ElectronicDetail from './components/Detail/Electronic_Detail'
import FurnituresDetail from './components/Detail/Furniture_Detail'



import MenSingleDetails from './components/Single_Details/Men_Single_Details';
import PetSingleDetail from './components/Single_Details/Pet_Single_Detail';
import KidSingleDetail from './components/Single_Details/Kid_Single_Detail'
import WomenSingleDetail from './components/Single_Details/Women_Single_Detail';
import ElectronicSingleDetail from './components/Single_Details/Electronic_Single_Detail'
import FurnituresSingleDetail from './components/Single_Details/Furniture_Single_Detail'

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
          {/*Man*/}
          <Route path="/men-collections" element={<GetManDetail />} />
          <Route path="/men-collections/:id" element={<MenSingleDetails />} />

          {/*Pets*/}
          <Route path='/pets-collections' element={<PetDetail />} />
          <Route path='/pets-collections/:id' element={<PetSingleDetail />} />

          {/*Kids*/}
          <Route path='/kids-collections' element={<KidDetails />} />
          <Route path='/kids-collections/:id' element={<KidSingleDetail />} />

          {/*women*/}
          <Route path='/women-collections' element={<WomenDetails />} />
          <Route path='/women-collections/:id' element={<WomenSingleDetail />} />

          {/*Home furnitures*/}
          <Route path='/furnitures-collections' element={<FurnituresDetail />} />
          <Route path='/furnitures-collections/:id' element={<FurnituresSingleDetail />} />
          {/*Electronics*/}
          <Route path='/electronics-collections' element={<ElectronicDetail />} />
          <Route path='/electronics-collections/:id' element={<ElectronicSingleDetail />} />



          <Route path="/container" element={<Container />} />
          <Route path='/slides' element={<SlideImages />} />

        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
