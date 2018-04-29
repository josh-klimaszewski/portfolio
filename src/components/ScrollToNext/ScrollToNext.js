import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../utils/scroll';
import './style.css';

class ScrollToNext extends Component {
    scrollToNext() {
      const { pageSelector } = this.props;
      const nextPage = document.querySelector(pageSelector);
      scrollToElement(nextPage);
    }
  
    render() {
      return (
        <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
          <div className="arrow bounce" >
            
          <i class="material-icons">arrow_downward</i>
          </div>
        </div>
      );
    }
  }
  
  ScrollToNext.propTypes = {
    pageSelector: PropTypes.string
  };
  
  
  export default ScrollToNext;
  