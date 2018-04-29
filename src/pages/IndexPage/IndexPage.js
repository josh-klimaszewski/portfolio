import React from 'react';
import Nav from '../../components/Nav';
import './style.css';

const IndexPage = () => {
    return (
        <div className="landing-page">
            <Nav />
            <div className="intro-container">
                <div className="intro-name">Josh Klimaszewski</div>
                <div className="intro-tag">
                    Front End Dev || UI Design
                </div>
            </div>
        </div>
    );
};

export default IndexPage;