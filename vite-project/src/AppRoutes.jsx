import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Mainpagein from './components/Mainpagein';
import SelectProvider from './components/SelectProvider';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/mainpagein" element={<Mainpagein />} />
        <Route path="/select-provider" element={<SelectProvider />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
