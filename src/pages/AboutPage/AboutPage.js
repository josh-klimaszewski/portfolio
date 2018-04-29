import React from 'react';
import './style.css';
import ScrollToNext from '../../components/ScrollToNext';


const AboutPage = () => {
    
  
    return (
      <div className="about-page" >
       
        <div className="content-grid">
          <h1>About</h1>
          <div className="about-wrapper">
            <div className="about-content">
              <p>About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. 
                About Section Here. About Section Here. </p>
            </div>
          </div>
        </div>
        <ScrollToNext pageSelector=".portfolio-page" />
      </div>
    );
  };
  
  
  
  export default AboutPage;
  