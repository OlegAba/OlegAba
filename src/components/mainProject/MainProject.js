import React from 'react';
import PropTypes from 'prop-types';
import { StyledMainProject } from './MainProject.styled';
import NavLink from '../navLink/NavLink';

const MainProject = ({
  device,
  project,
  handleImageClick,
  ...props 
}) => {

  const imageGrid = (
    <div className="image-grid">
      {project.secondaryImages.map((image, index) =>
        <div 
          key={index}
          className="box-section image-grid-col"
          onClick={handleImageClick.bind(this, index)}
        >
          <img 
            src={image} 
            alt={index + "-preview"}
          />
        </div>
      )}
    </div>
  );

  const learnedSection = (
    <ul>
      {project.learned.map((text, index) => 
        <li key={index}>
          <span>{text}</span>
        </li>      
      )}
    </ul>
  );

  return (
    <StyledMainProject device={device} {...props}>
      <h1>{project.title}</h1>

      <div className="box-section image-container">
        <img 
          src={project.mainImage} 
          alt="Project header"
        />
      </div>

      <div className="info-grid">
        <div className="box-section grid-column">
          <div>
            <h4>About</h4>
            <p>{project.about}</p>
          </div>

          <div className="button-container">
            <div className="button-grid">
              <a href={project.appleLink.url}>
                <img 
                  src={project.appleLink.image.source} 
                  alt={project.appleLink.image.description} 
                />
              </a>

              <NavLink
                className="link-button" 
                Icon={project.githubLink.icon} 
                title={project.githubLink.title} 
                href={project.githubLink.url} 
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        </div>
        
        <div className="box-section grid-column">
          <h4>Accomplishments</h4>
          {learnedSection}
        </div>
      </div>

      {imageGrid}
    </StyledMainProject>
  )
}

MainProject.propTypes = {
  device: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  handleImageClick: PropTypes.func.isRequired,
}

export default MainProject;