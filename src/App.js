// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import NavBar from './components/NavBar';
import Home  from './components/Home';
import SlideImages from './components/SlideImage';
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
      </Routes>
    </Router>
  );
}

export default App;
