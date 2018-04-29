import React, { Component } from 'react';
import './App.css';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

class App extends Component {
  render() {
    return (
      <div>
        <IndexPage />
        <AboutPage />
        <PortfolioPage />
      </div>
    );
  }
}

export default App;
