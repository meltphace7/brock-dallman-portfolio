import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import BioSection from './components/BioSection'
import Skills from './components/Skills'
import ProjectsSection from './components/ProjectsSection'
import MobileProjectsSection from './components/MobileProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <BioSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
