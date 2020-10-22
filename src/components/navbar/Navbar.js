import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavbar } from './Navbar.styled';
import { CgMenu } from 'react-icons/cg'
import ImageTitleButton from '../imageTitleLink/ImageTitleLink';

const Navbar = ({
  logo, 
  isMobile, 
  isDarkMode, 
  onSwitchChange, 
  onButtonClick, 
  ...props 
}) => {

  const navLogo = (
    <div className="nav-logo">
      <img src={logo} />
    </div>
  );

  const navLinkButtons = (
    <div className="nav-links">
      <ImageTitleButton />
      {/* <a href="">Github</a>
      <a href="">LinkedIn</a>
      <a href="">Email</a>
      <a href="">Resume</a> */}
    </div>
  );

  const navToggle = (
    <div className="nav-toggle">
      <input 
        type="checkbox" 
        checked={isDarkMode} 
        onChange={onSwitchChange}
      />
    </div>
  );

  const navButton = (
    <CgMenu 
      className="nav-menu"
      size="25px"
      onClick={onButtonClick}
    />
  );

  const expandedNavbar = (
    <div className="navbar-container">
      {navLogo}
      {navLinkButtons}
      {navToggle}
    </div>
  );

  const compactNavbar =  (
    <div className="navbar-container">
      {navLogo}
      {navButton}
    </div>
  );

  let currentNavbar = isMobile ? compactNavbar : expandedNavbar

  return (
    <StyledNavbar {...props}>
      {currentNavbar}
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  logo: PropTypes.node.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Navbar;