import React, { Component } from 'react';
import { Icon } from 'antd';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="y-header">
        <ul className="header-menu font14">
          <li>Signed in as <a style={{ textDecoration: 'underline' }}>Member</a></li>
          <li><Icon type="arrow-right" /> Sign out</li>
        </ul>
      </header>
    );
  }
}

export default Header;
