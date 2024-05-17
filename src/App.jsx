import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './global.css';
import LandingPage from './pages/landing_page';
import PropertyDetail from './component/propertyDescription/propertyDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/desPage" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
