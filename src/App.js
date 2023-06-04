import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="portfolio-container">
      <Navbar />
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