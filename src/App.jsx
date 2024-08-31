import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ThisIsUsSection from './Components/ThisIsUsSection';
import OrbitalSection from './Components/OrbitalSection';
import WozooWorld from './Components/WozooWorld';
import PlayerSection from './Components/PlayerSection';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll('img'));
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    if (images.length === 0) {
      setLoading(false);
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
        <div className="flex justify-center items-center min-h-screen bg-white">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
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
            <Route
              path="/connect"
              element={
                <>
                  <Laughhome />
                  <Bored />
                  <Timer />
                  <HandSection />
                  <Footer />
                </>
              }
            />
            <Route
              path='/about-us'
              element={
                <>
                  <OrbitalSection/>
                  <ThisIsUsSection/>
                </>
              }
              ></Route>
            <Route
              path="/fun"
              element={
                <>
                  <Villan />
                  <TrendingSection />
                  <ExploreGenres/>
                  <FriendSection />
                  <PyramidSection />
                  <Timer />
                  <Footer />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                 <WozooWorld/>
                 <PlayerSection/>
                 <Footer/>
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
