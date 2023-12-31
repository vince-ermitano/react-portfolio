import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  AOS.init();
  
  return (
    <>
      <Homepage />
      <Footer />
    </>
  )
}

export default App
