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
    const images = document.querySelectorAll('img');
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    if (images.length === 0) {
      setLoading(false); // No images, no need to load
    } else {
      images.forEach((image) => {
        if (image.complete) {
          handleImageLoad();
        } else {
          image.addEventListener('load', handleImageLoad);
          image.addEventListener('error', handleImageLoad);
        }
      });
    }

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleImageLoad);
        image.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          {/* Customize the loader as per your requirements */}
          <div className="spinner">Loading...</div>
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
