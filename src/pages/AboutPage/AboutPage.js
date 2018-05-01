import React from 'react';
import './style.css';
import ScrollToNext from '../../components/ScrollToNext';


const AboutPage = () => {
    
  
    return (
      <div className="about-page" > 
        <h1>About</h1>
        <div className="about-content">
            <p>Hello!</p>
            <p>I'm a developer, artist, and musician from Detroit MI.</p>
            <p>My work strives to be concise and accessible.</p>
            <p>React, SASS, and Ruby on Rails are some of my favorite tools for development.</p>
            <p>If you have a company, pet project, or great idea, don't hesitate to contact me!</p>
        </div>
        
        <ScrollToNext pageSelector=".portfolio-page" />
    </div>
    );
  };
  
  
  
  export default AboutPage;
  