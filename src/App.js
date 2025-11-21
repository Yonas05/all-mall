import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Container from './components/Container';
import { createTheme } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SlideImages from './components/SlideImage';
import Footer from './components/Footer';
import { ThemeProvider } from '@emotion/react';

import MenDetails from './components/Detail/Men_Details';
import PetDetails from './components/Detail/Pet_Detail';
import KidDetails from './components/Detail/Kid_Detail';
import WomenDetails from './components/Detail/Women_Detail';
import ElectronicDetails from './components/Detail/Electronic_Detail';
import FurnituresDetails from './components/Detail/Furniture_Detail';

import MenSingleDetails from './components/Single_Details/Men_Single_Details';
import PetSingleDetails from './components/Single_Details/Pet_Single_Detail';
import KidSingleDetails from './components/Single_Details/Kid_Single_Detail';
import WomenSingleDetails from './components/Single_Details/Women_Single_Detail';
import ElectronicSingleDetails from './components/Single_Details/Electronic_Single_Detail';
import FurnituresSingleDetails from './components/Single_Details/Furniture_Single_Detail';
import AdminNavBar from './Admin/Admin.navbar';
import MenAdmin from './Admin/Men';

function AppWrapper() {
  const location = useLocation();

  // Define paths where the regular NavBar should be hidden
  const hideNavBarPaths = ['/admin-panel'];

  // You can also check with startsWith('/admin') for more complex admin paths
  const hideNavBar = hideNavBarPaths.includes(location.pathname);

  return (
    <>
      {/* Show NavBar only if not in admin panel */}
      {!hideNavBar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Man */}
        <Route path="/men-collections" element={<MenDetails />} />
        <Route path="/men-collections/:id" element={<MenSingleDetails />} />

        {/* Pets */}
        <Route path="/pets-collections" element={<PetDetails />} />
        <Route path="/pets-collections/:id" element={<PetSingleDetails />} />

        {/* Kids */}
        <Route path="/kids-collections" element={<KidDetails />} />
        <Route path="/kids-collections/:id" element={<KidSingleDetails />} />

        {/* Women */}
        <Route path="/women-collections" element={<WomenDetails />} />
        <Route path="/women-collections/:id" element={<WomenSingleDetails />} />

        {/* Furniture */}
        <Route path="/furnitures-collections" element={<FurnituresDetails />} />
        <Route path="/furnitures-collections/:id" element={<FurnituresSingleDetails />} />

        {/* Electronics */}
        <Route path="/electronics-collections" element={<ElectronicDetails />} />
        <Route path="/electronics-collections/:id" element={<ElectronicSingleDetails />} />

        {/* Admin */}
        <Route path="/admin-panel" element={<AdminNavBar />} />
        <Route path='/men-admin' element={<MenAdmin/>}/>

        <Route path="/container" element={<Container />} />
        <Route path="/slides" element={<SlideImages />} />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </>
  );
}

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: 10,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;
