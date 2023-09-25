import React from "react";
import projects from "../Projects";
import ProjectCard from "./ProjectCard"

const ProjectCardContainer = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"space-evenly",
  };
  return (
    <div style={containerStyle}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectCardContainer;
