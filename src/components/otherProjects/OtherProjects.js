import React from 'react';
import PropTypes from 'prop-types';
import { StyledOtherProjects } from './OtherProjects.styled';
import phoneThumbnail from '../../assets/images/projects/InstaQR/instaqr-2.png';

const OtherProjects = ({
  device,
  projects,
  ...props 
}) => {

  return (
    <StyledOtherProjects device={device} {...props}>
        <div className="projects-grid">
          {projects.map((project, index) =>
            <div
              key={index} 
              className="box-section projects-grid-col">
              <h4>{project.title}</h4>
              <img src={project.image} />
            </div>
          )}
        </div>
    </StyledOtherProjects>
  )
}

OtherProjects.propTypes = {
  device: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
}

export default OtherProjects;