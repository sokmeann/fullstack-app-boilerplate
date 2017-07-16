import React, { Component } from 'react';
import { Link } from 'react-router';

require('./TopNav.scss');

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      pageLoaded: false,
      isHidden: true,
    };
    this.hideTopNavColor = this.hideTopNavColor.bind(this);
  }

  componentDidMount() {
    this.hideTopNavColor();
    window.addEventListener('scroll', this.hideTopNavColor);
    this.setState({ // eslint-disable-line
      pageLoaded: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideTopNavColor);
  }

  hideTopNavColor() {
    const { isHidden } = this.state;
    window.scrollY > 100 // eslint-disable-line
      ? !isHidden && this.setState({ isHidden: true })
      : isHidden && this.setState({ isHidden: false });
  }

  render() {
    const topNavColor = this.state.isHidden ? 'top-nav-active' : '';

    return (
      <nav id="top-nav" className={`full-w flex-row-space-between ${topNavColor}`}>
        <div id="top-nav-left">
          <Link to="home">
            LOGO
          </Link>
        </div>
        <div id="top-nav-right" className="flex-row-space-between">
          <Link to="signup">
            <div>SIGN UP</div>
          </Link>
          <Link to="login">
            <div>LOGIN</div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default TopNav;
