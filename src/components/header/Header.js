import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Navbar">
        <h2>Oleg Abalonski</h2>
      </div>
    )
  };
}

export default Header;