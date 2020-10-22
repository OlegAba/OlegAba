import React from 'react';
import PropTypes from 'prop-types';
import { StyledImageTitleLink } from './ImageTitleLink.styled';
import githubLogo from '../../assets/icons/github.svg';

const ImageTitleLink = ({ ...props }) => {

  return (
    <StyledImageTitleLink {...props}>
      <span background={githubLogo}></span>
      Github
    </StyledImageTitleLink>
  )
}

ImageTitleLink.propTypes = {

}

export default ImageTitleLink;