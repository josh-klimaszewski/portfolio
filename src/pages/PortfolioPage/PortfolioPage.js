import React from 'react';
import './style.css';
import ScrollToPrevious from '../../components/ScrollToPrevious';
import PortfolioItems from './portfolio-items';

const PortfolioPage = () => {
    return (
        <div className="portfolio-page" >
            <div className="content-grid">
                <h1 >Portfolio</h1>
                <PortfolioItems /> 
            </div>
            <ScrollToPrevious pageSelector=".about-page" />
        </div>
    );
};
export default PortfolioPage;

// const PortfolioPage = () => {
//     return (
//         <div className="portfolio-page" >
//             <div className="content-grid">
//                 <h1 >Portfolio</h1>
//                 <div className="portfolio-wrapper">
//                 <style jsx="true">
//                     {`
                    
//                     .portfolio-item__links a:hover {
//                         border-bottom: 2px solid black;
//                     }
//                     `}
//                 </style>
                
//                 {portfolioItems.map((item, i) => (
//                     <PortfolioItem render={item.render} key={i} />
//                 ))}
//                 </div>
//             </div>
//             <ScrollToPrevious pageSelector=".about-page" />
//         </div>
//     );
// };
// export default PortfolioPage;