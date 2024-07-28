import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Zoosection from './Components/Zoosection'
import Stairs from './Components/Stairs'
import Div from './Components/Div'
import Timer from './Components/Timer'
import Person from './Components/Person'
import About from './Components/About'
import Proposition from './Components/Proposition'

function App() {
  

  return (
    <>

   
    <Navbar/>
    <Hero/>
    <About/>
    <Div/>
    <Proposition/>
    <Stairs/>
    <Timer/>
    <Zoosection/>
    <Person/>
    <Footer/>

    </>
  )
}

export default App
