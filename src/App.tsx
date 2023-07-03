import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <About />
      <Technology />
      <Projects />
    </div>
  );
}

export default App;
