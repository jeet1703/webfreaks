import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Laughhome from './Components/Laughhome';
import Bored from './Components/Bored';
import HandSection from './Components/HandSection';
import Villan from './Components/Villan';
import ExploreGenres from './Components/ExploreGenres';
import FriendSection from './Components/FriendSection';
import PyramidSection from './Components/PyramidSection';
import TrendingSection from './Components/TrendingSection';

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
    <Router>
      {loading ? (
        <div className="loader">
          {/* Customize the loader as per your requirements */}
          <div className="spinner">Loading...</div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            {/* Section 1 Route */}
            <Route
              path="/"
              element={
                <>
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
              }
            />

            {/* Section 2 Route */}
            <Route
              path="/about-us"
              element={
                <>
                  <Laughhome />
                  <Bored />
                  <ExploreGenres/>
                  <Timer />
                  <HandSection />
                  <Footer />
                </>
              }
            />
             <Route
              path="/products"
              element={
                <>
                  
                  <Villan/>
                  <TrendingSection/>
                  <ExploreGenres/>
                  <FriendSection/>
                  <PyramidSection/>
                  
                  <Timer />
                  <Footer />
                </>
              }
            />
          </Routes>
          
        </>
      )}
    </Router>
  );
}

export default App;
