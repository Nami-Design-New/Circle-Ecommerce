import './App.css'
import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="About" element={<About />} />
    </Routes>

    <Footer />
 
    </>
  )
}

export default App
