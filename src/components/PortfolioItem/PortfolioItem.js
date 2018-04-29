import React from 'react';

import './style.css';

const PortfolioItem = ({ name, description, url }) => {
  return (
    <div className="portfolio-item">
        <a className="portfolio-item_title" src={url}>{name}</a>
        <p className="portfolio-item_desc">{description}</p>
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
  
