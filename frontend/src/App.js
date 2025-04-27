import './App.css';
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
  );
}

export default App;
