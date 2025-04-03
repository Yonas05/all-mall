// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import NavBar from './components/NavBar';
import Home  from './components/Home';
import SlideImages from './components/SlideImage';
import Footer from './components/Footer';
import ManDisplay from './components/Category/Man_Display';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/container" element={<Container />} />
        <Route path='/slides' element={<SlideImages />} />
        <Route path='/man_display' element={<ManDisplay />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
