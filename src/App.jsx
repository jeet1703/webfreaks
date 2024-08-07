import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Stairs from './Components/Stairs';
import Div from './Components/Div';
import Timer from './Components/Timer';
import About from './Components/About';
import Proposition from './Components/Proposition';
import Triangle from './Components/Triangle';
import FunSection from './Components/Funsection';
import Space from './Components/Space';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          {/* Customize the loader as per your requirements */}
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Triangle />
          <Div />
          <Proposition />
          <Stairs />
          <Space />
          <Timer />
          <FunSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
