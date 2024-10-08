import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Qualification from './components/qualification/qualification';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Scrollup from './components/scrollup/scrollup';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Contact />
    </main>
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
