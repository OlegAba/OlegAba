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
            alt="Secondary project"
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

  const technologiesSection = (
    <ul>
      {project.technologies.map((text, index) => 
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
        <div className="box-section info-grid-col">
          <div>
            <h4>About</h4>
            <p>{project.about}</p>
          </div>

          <div className="button-grid">
            {/* TODO: Move href and image srcs to prop */}
            <a href="https://apps.apple.com/us/app/instaqr-live-wallpaper-maker/id1514732973?ign-mpt=uo%3D4">
              <img 
              src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-11-16&amp;kind=iossoftware&amp;bubble=ios_apps" 
              alt="Download on iTunes" 
              />
            </a>

            <NavLink
              className="linkButton" 
              Icon={ project.link.icon } 
              title={ project.link.title } 
              href={ project.link.url } 
              target="_blank"
            />
          </div>
        </div>
        
        <div className="box-section info-grid-col">
          <h4>Things I Learned:</h4>
          {learnedSection}

          <div className="tech-container">
            <h4>Technologies Used:</h4>
            {technologiesSection}
          </div>
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