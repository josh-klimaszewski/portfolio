import React from 'react';

import './style.css';

const PortfolioItem = ({ name, description, url, img, code}) => {
  return (
    <div className="portfolio-item">
        <a href={url}><h3>{name}</h3></a>
        <a href={url}><img src={img}/></a>
        <p>{description}</p>
        <a href={code} className="github">Github</a>
    </div>
  );
};

export default PortfolioItem;
// const PortfolioItem = (props) => {
  

//     if (props.render) return props.render;
//     else
//       return (
//         <div
//           className="portfolio-item"
          
//         >
//           <div className="portfolio-item__title">Badass</div>
  
//           <div className="portfolio-item__desc">
//             I do badass things and kickass everyday! I do badass things and
//             kickass everyday! I do badass things and kickass everyday!
//           </div>
//           <div className="portfolio-item__icon">
//             <i className="fab fa-js" />
//             <i className="fab fa-react" />
//             <i className="fab fa-html5" />
//           </div>
//           <div className="portfolio-item__links">
//             <a src="#">Code</a>
//             <a src="#">Blog</a>
//           </div>
//         </div>
//       );
//   };
  
//   PortfolioItem.contextTypes = {
//     theme: PropTypes.any
//   };
  
//   export default PortfolioItem;
  
