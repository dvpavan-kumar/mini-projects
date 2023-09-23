import React from 'react';

const ProjectCard = ({ title, image, liveDemoLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  );
};

export default ProjectCard;
