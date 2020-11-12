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
              className="box-section projects-grid-col"
              href={project.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer" 
            >
              <div className="link-container">
                <h4>{project.title}</h4>
                <div className="image-container">
                  <img 
                    src={project.image}
                    alt={project.title} 
                  />

                </div>
              </div>
            </a>
          )}
        </div>
    </StyledOtherProjects>
  )
}

OtherProjects.propTypes = {
  device: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
}

export default OtherProjects;