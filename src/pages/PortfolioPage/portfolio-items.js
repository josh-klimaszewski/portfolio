import React from 'react';
import PortfolioItem from '../../components/PortfolioItem';

const PortfolioItems = () => {
    const portfolioData = [
        {
            name: 'micro-blog',
            description: 'micro-blog description',
            img: 'https://image.ibb.co/hFwHKH/Screen_Shot_2018_04_29_at_7_01_02_PM.png',
            url: 'http://bit.ly/micro-blog-jk',
            code: 'https://github.com/josh-klimaszewski/micro-blog'
        },
        {
            name: 'telephone-callers',
            description: 'telephone-callers description',
            img: 'https://image.ibb.co/jASreH/Screen_Shot_2018_04_29_at_6_58_27_PM.png',
            url: 'http://telephone-callers.surge.sh/',
            code: 'https://github.com/josh-klimaszewski/telephone-callers'
        },
        {
            name: 'get-a-ways',
            description: 'get-a-ways description',
            img: 'https://image.ibb.co/jK5Nmx/Screen_Shot_2018_04_29_at_7_00_33_PM.png',
            url: 'http://bit.ly/getaways-demo',
            code: 'https://github.com/jjwint/vacaApp'
        }
    ];
    const portfolio = portfolioData.map((portfolioItem) => {
        return (
            <PortfolioItem 
            key={portfolioItem.name}
            name={portfolioItem.name}
            description={portfolioItem.description}
            url={portfolioItem.url}
            img={portfolioItem.img}
            code={portfolioItem.code}
            />
        );
    });
    return (
        <div className="portfolio-wrapper">
            {portfolio}
        </div>
    );
}

export default PortfolioItems;
// export default [{
//     name: 'project 1',
//     render: (
//       <div className='portfolio-item'>
//         <div className='portfolio-item__title'>
//           micro-blog
//         </div>
//         <div className='portfolio-item__desc'>
//           A compact blog built with Ruby on Rails.
//         </div>
//         <div className='portfolio-item__icon'>
//           <i className="fab fa-js"></i>
//           <i className="fab fa-npm"></i>
//         </div>
//         <div className='portfolio-item__links'>
//           <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/typy">NPM</a>
//           <a target="_blank" rel="noopener noreferrer" href="https://github.com/flexdinesh/typy">More</a>
//         </div>
//       </div>
//     )
//   }, {
//       name: 'project 2',
//       render: (
//         <div className='portfolio-item'>
//           <div className='portfolio-item__title'>
//             Project 2
//           </div>
//           <div className='portfolio-item__desc'>
//             desc.
//           </div>
//           <div className='portfolio-item__icon'>
//             <i className="fab fa-js"></i>
//             <i className="fab fa-npm"></i>
//           </div>
//           <div className='portfolio-item__links'>
//             <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/typy">NPM</a>
//             <a target="_blank" rel="noopener noreferrer" href="https://github.com/flexdinesh/typy">More</a>
//           </div>
//         </div>
//       )
//   }, {
//       name: 'project 3',
//       render: (
//         <div className='portfolio-item'>
//           <div className='portfolio-item__title'>
//             Project 3
//           </div>
//           <div className='portfolio-item__desc'>
//             desc.
//           </div>
//           <div className='portfolio-item__icon'>
//             <i className="fab fa-js"></i>
//             <i className="fab fa-npm"></i>
//           </div>
//           <div className='portfolio-item__links'>
//             <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/typy">NPM</a>
//             <a target="_blank" rel="noopener noreferrer" href="https://github.com/flexdinesh/typy">More</a>
//           </div>
//         </div>
//       )
//   }]