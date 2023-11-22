import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import BioSection from './components/BioSection'
import Skills from './components/Skills'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Certs from './components/Certs';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'

console.log(Route)
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route path="/home">
          <Navigation />
          <Header />
          <BioSection />
          <Skills />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </Route>
        <Route path="/certs">
          <Certs />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
