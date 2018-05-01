import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toTop as scrollToPageTop } from '../../utils/scroll';

import './style.css';

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      shouldShowScrollTopArrow: false
    };
  }

  handleScroll() {
    const boundingRect = ((document || {}).documentElement || {})
      .getBoundingClientRect;
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100)
        this.setState({ shouldShowScrollTopArrow: true });
      else this.setState({ shouldShowScrollTopArrow: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    
    const hideArrowClass = this.state.shouldShowScrollTopArrow ? '' : 'hide';
    return (
      <div className="scroll-top" onClick={(e) => scrollToPageTop()}>
        <div
          className={`arrow ${hideArrowClass} bounce`}  >
          <i className="material-icons">arrow_upward</i>
          <p className="to-top">To Top</p>
        </div>
      </div>
    );
  }
}

ScrollTop.contextTypes = {
  theme: PropTypes.any
};

export default ScrollTop;
