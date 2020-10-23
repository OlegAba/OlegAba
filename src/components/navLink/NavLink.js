import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink } from './NavLink.styled';

const NavLink = ({Icon, title, ...props }) => {

  return (
    <StyledNavLink {...props}>
      <Icon className="navLink-icon" size="20px" />
      {title}
    </StyledNavLink>
  )
}

NavLink.propTypes = {
  Icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default NavLink;