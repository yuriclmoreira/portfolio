import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <About />
      <Technology />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
