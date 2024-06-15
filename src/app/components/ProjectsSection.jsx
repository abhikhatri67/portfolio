"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECTS = [
  { title: "Portfolio", imgUrl: "/images/Project-shortly.png", tags: ["All"], description: "Project 1 description", gitUrl: "https://youtube-clone-js.netlify.app/", previewUrl: "https://youtube-clone-js.netlify.app/", id: 1 },
  { title: "Portfolio", imgUrl: "/images/Project-shortly.png", tags: ["All"], description: "Project 1 description", gitUrl: "https://youtube-clone-js.netlify.app/", previewUrl: "https://youtube-clone-js.netlify.app/", id: 2 },
  { title: "Portfolio", imgUrl: "/images/Project-shortly.png", tags: ["Web"], description: "Project 1 description", gitUrl: "https://youtube-clone-js.netlify.app/", previewUrl: "https://youtube-clone-js.netlify.app/", id: 3 },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = newTag => {
    setTag(newTag);
  };

  const filteredProjects = PROJECTS.filter(project => project.tags.includes(tag));

  return (
    <div className="text-white">
      <h2 className="text-center mt-4 mb-4 text-4xl font-bold">My Projects</h2>
      <div className="text-center flex flex-row justify-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag == "All"} />
        <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag == "Web"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} title={project.title} imgUrl={project.imgUrl} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
