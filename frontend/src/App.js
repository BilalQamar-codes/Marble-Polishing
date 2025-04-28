import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage"; // Import the LandingPage component
import ContactUs from "./pages/ContactUs"; // Import the ContactUs component
import MarblePolishingPage from "./pages/MarblePolishing"; // Import the MarblePolishingPage component
import TilePolishingPage from "./pages/TilePolishing"; // Import the TilePolishingPage component
import ProcelainPolishingPage from "./pages/ProcelainPolishing"; // Import the PorcelainPolishingPage component
import CeramicPolishingPage from "./pages/CeramicPolishing"; // Import the CeramicPolishingPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/tile-polishing" element={<TilePolishingPage />} />
          <Route path="/marble-polishing" element={<MarblePolishingPage />} />
          <Route path="/porcelain-polishing" element={<ProcelainPolishingPage />} />
          <Route path="/ceramic-polishing" element={<CeramicPolishingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;