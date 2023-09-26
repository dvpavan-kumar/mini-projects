import React from "react";
import projects from "../ProjectsData";
import ProjectCard from "./ProjectCard";

const ProjectCardContainer = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };
  return (
    <>
      <section
        style={containerStyle}
        className="pt-2 lg:pt-[20px] pb-1 lg:pb-2 h-full bg-[#F3F4F6]"
      >
        <div className="flex flex-wrap justify-center ">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              CardTitle={project.title}
              sourceCodeHref={project.sourceCodeHref}
              titleHref={project.liveDemoLink}
              btnHref={project.liveDemoLink}
              CardDescription={project.details}
              Button={project.demoButton}
              sourceCode={project.sourceCode}
              skills={project.skills}
              project={project}

            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectCardContainer;
