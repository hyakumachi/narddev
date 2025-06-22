// import { useState } from 'react'
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Info/Info";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import Contact from "./components/Contact/Contact";

function App() {
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
  );
}

export default App;
