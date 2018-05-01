import React, { Component } from 'react';
import './App.css';
import ParallaxBackground from './components/ParallaxBackground';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ScrollTop from './components/ScrollTop';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <ParallaxBackground />
        <IndexPage />
        <AboutPage />
        <PortfolioPage />
        <ScrollTop />
        <Footer />
      </div>
    );
  }
}

export default App;
