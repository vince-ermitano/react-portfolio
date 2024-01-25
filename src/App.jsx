import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Odyssey from './components/Projects/Odyssey'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer'

function App() {
  AOS.init();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/projects/odyssey' element={<Odyssey />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
