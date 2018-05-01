import React from 'react';
import './style.css';
import ScrollToNext from '../../components/ScrollToNext';


const AboutPage = () => {
    
  
    return (
      <div className="about-page" > 
        <h1>About</h1>
        <div className="about-content">
            <img src="https://image.ibb.co/bFRdW7/jk_greyscale.png"></img>
            <h2>Hello!</h2>
            <p>I'm a developer living in Hamtramck MI.</p>
            <p>My work strives to be concise, responsive, and accessible.</p>
            <p>React, SASS, and Ruby on Rails are some of my favorite tools for development.</p>
            <p>If you have a company, pet project, or great idea, don't hesitate to <a href="mailto:joshua.klimaszewski@gmail.com">contact</a> me!</p>
        </div>
        
        <ScrollToNext pageSelector=".portfolio-page" />
    </div>
    );
  };
  
  
  
  export default AboutPage;
  