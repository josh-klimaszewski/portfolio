import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../utils/scroll';
import './style.css';

class ScrollToPrevious extends Component {
  scrollToPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    

    return (
      <div
        className="scroll-to-previous"
        onClick={(e) => this.scrollToPrevious()}
      >
        <div className="arrow bounce" >
            <i className="material-icons">arrow_upward</i>
        </div>
      </div>
    );
  }
}

ScrollToPrevious.propTypes = {
  pageSelector: PropTypes.string
};


export default ScrollToPrevious;
