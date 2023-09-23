import React from 'react';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    title: 'Project 1',
    image: 'project1.jpg', // Replace with the actual image path
    liveDemoLink: 'https://example.com/project1', // Replace with the live demo link
  },
  // Add more projects as needed
];

const ProjectCardContainer = () => {
  return (
    <div className="project-card-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          liveDemoLink={project.liveDemoLink}
        />
      ))}
    </div>
  );
};

export default ProjectCardContainer;
