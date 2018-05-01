import React from 'react';
import Nav from '../../components/Nav';
import ScrollToNext from '../../components/ScrollToNext';
import SocialIcons from '../../components/SocialIcons';
import './style.css';

const IndexPage = () => {
    return (
        <div className="landing-page">
            <Nav />
            <main >
                <div className="intro-wrapper">
                    <h1 className="intro-name">Josh Klimaszewski</h1>
                    <div className="tagline">
                    Front End Dev || Web Creator 
                    </div>
                    <SocialIcons />
                </div>
                
            </main>
            <ScrollToNext pageSelector=".about-page" />
        </div>
    );
};

export default IndexPage;