import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import TechStack from './components/TechStack/TechStack'
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Featured from './components/Featured/Featured'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Contact />
      <TechStack />
      <Experience />
      <Featured />

      <Footer />
    </>
  )
}

export default App
