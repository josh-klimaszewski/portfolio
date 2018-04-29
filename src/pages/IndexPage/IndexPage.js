import React from 'react';
import Nav from '../../components/Nav';
import ScrollToNext from '../../components/ScrollToNext';
import './style.css';

const IndexPage = () => {
    return (
        <div className="landing-page">
            <Nav />
            <main >
                <div className="intro-wrapper">
                    <div className="intro-name">Josh Klimaszewski</div>
                    <div className="tagline">
                    Front End Dev || UI Design
                    </div>
                </div>
            </main>
            <ScrollToNext pageSelector=".about-page" />
        </div>
    );
};

export default IndexPage;