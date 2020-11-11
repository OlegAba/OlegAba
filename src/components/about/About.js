import React from 'react';
import PropTypes from 'prop-types';
import { StyledAbout } from './About.styled';

const About = ({
  about,
  device, 
  ...props 
}) => {

  return (
    <StyledAbout device={device} {...props}>
      <h1>{about.title}</h1>

      <div className="box-section image-container">
        <img 
          src={about.image} 
          alt="avatar"
        />
      </div>

      <div className="info-grid">
        <div className="box-section info-grid-col">
          <div>
            <h4>About</h4>
            <p>{about.description}</p>
          </div>
        </div>
      </div>
    </StyledAbout>
  )
}

About.propTypes = {
  about: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
}

export default About;