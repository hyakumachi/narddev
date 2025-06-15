import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import TechStack from './components/TechStack/TechStack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Contact />
      <TechStack />
    </>
  )
}

export default App
