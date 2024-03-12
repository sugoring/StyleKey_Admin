import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Selectedbar from "./components/Selectedbar"; 

import StylePointsPage from "./features/stylePoints/StylePointsPage";
import StylePointDetails from "./features/stylePoints/StylePointDetails";
import StylePointUpdate from "./features/stylePoints/StylePointUpdate";
import BrandDetails from "./features/brands/BrandDetails";
import BrandCreate from "./features/brands/BrandCreate";
import BrandUpdate from "./features/brands/BrandUpdate";
import CoordinateLookDetails from "./features/coordinateLooks/CoordinateLookDetails";
import CoordinateLookCreate from "./features/coordinateLooks/CoordinateLookCreate";
import CoordinateLookUpdate from "./features/coordinateLooks/CoordinateLookUpdate";
import './App.css'; 

function App() {
  return (
    <Router>
      <>
        <Selectedbar/>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<StylePointsPage />} />
          <Route path="/stylepoint/:id" element={<StylePointDetails />} />
          <Route path="/stylepoint/:id/update" element={<StylePointUpdate />} />

          <Route path="/brand/:id" element={<BrandDetails />} />
          <Route path="/brand/create" element={<BrandCreate />} />
          <Route path="/brand/:id/update" element={<BrandUpdate />} />

          <Route path="/coordinate-look/:id" element={<CoordinateLookDetails />} />
          <Route path="/coordinate-look/create" element={<CoordinateLookCreate />} />
          <Route path="/coordinate-look/:id/update" element={<CoordinateLookUpdate />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
