import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import OurWorkSection from './components/OurWork';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <OurWorkSection />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;


