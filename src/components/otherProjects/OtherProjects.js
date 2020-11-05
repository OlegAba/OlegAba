import React from 'react';
import PropTypes from 'prop-types';
import { StyledOtherProjects } from './OtherProjects.styled';

const OtherProjects = ({
  device,
  projects,
  ...props 
}) => {

  return (
    <StyledOtherProjects device={device} {...props}>
        <div className="projects-grid">
          {projects.map((project, index) =>
            <a
              href={project.url}
              target="_blank"
              key={index} 
              className="box-section projects-grid-col">

              <h4>{project.title}</h4>
              <div className="image-container">
                <img src={project.image} />
              </div>
            </a>
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