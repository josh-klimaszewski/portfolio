import React from 'react';
import './style.css';

const Footer = () => {
  
  return (
    <footer>
      <div className="content-grid">
        <div>
            Made by <a 
            href="https://github.com/josh-klimaszewski" 
            target="_blank" 
            rel="noopener noreferrer" >
            Josh Klimaszewski
            </a>
            . Built in React.
        </div>
      </div>
    </footer>
  );
};


export default Footer;