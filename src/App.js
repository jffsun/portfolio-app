import React from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="portfolio-container">
      <Header />
       <div>
        <Home/>
        <About/>
        <Work/>
        <Contact/>
       </div>
      <Footer />
    </div>
  );
}

export default App;