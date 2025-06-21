import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import TechStack from './components/TechStack/TechStack'
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Featured from './components/Featured/Featured'
import Contact from './components/Contact/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Info />
      <TechStack />
      <Experience />
      <Featured />
      <Contact />

      <Footer />
      </>
  )
}

export default App
