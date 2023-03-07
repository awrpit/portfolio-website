import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../utils/projects";
function Projects() {
  return (
    <div>
      <h1 className="text-3xl px-5 py-4 text-slate-600">
        A collection of projects I've built
      </h1>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Projects;
