import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink } from './NavLink.styled';
import githubLogo from '../../assets/icons/github.svg';

const NavLink = ({Icon, title, ...props }) => {

  return (
    <StyledNavLink {...props}>
      <Icon className="navLink-icon" size="20px" />
      {title}
    </StyledNavLink>
  )
}

NavLink.propTypes = {

}

export default NavLink;