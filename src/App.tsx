import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Technology from './components/Technology';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <About />
      <Technology />
    </div>
  );
}

export default App;
