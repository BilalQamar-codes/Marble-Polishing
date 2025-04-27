import './App.css';
<<<<<<< HEAD
import LandingPage from './Components/landingpage'; // Ensure correct case for component names
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
=======
import Footer from './components/footer.jsx';
import Card from './components/Card.jsx';
import landingPageImage from './assets/landing_page_image.jpg';
function App() {
  return (
    <div className="App">
      <Card
        image={landingPageImage}
        title="Marble Polishing"
        buttonText="Whatsapp"
        buttonLink="https://example.com/marble-polishing"
      />
      <Footer />
    </div>
>>>>>>> a92ff1ae99e7730a827dab118d629590d9d34a9b
  );
}

export default App;
