import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Work from './Components/Work/Work';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
