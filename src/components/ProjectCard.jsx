import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="flex justify-center p-2">
      <div className=" w-[95vw] bg-slate-200 rounded-lg ">
        <h1 className="p-5 text-2xl font-bold text-slate-600 hover:text-slate-900">
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h1>
        <p className="px-5 pb-5 text-xl"> {project.description} </p>
      </div>
    </div>
  );
}

export default ProjectCard;
