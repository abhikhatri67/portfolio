"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECTS = [
  {
    title: "Netflix GPT",
    imgUrl: "/images/Netflix-gpt.webp",
    tags: ["All", "Web", "Mobile"],
    description: "Developed a Netflix clone using React, Redux, and Firebase, featuring GPT-based search functionality for movies, user authentication, and a responsive, dynamic UI.",
    gitUrl: "https://github.com/abhikhatri67/netflix-gtp",
    previewUrl: "https://abhishekkhatri-gpt.netlify.app",
    id: 1,
  },
  {
    title: "Portfolio",
    imgUrl: "/images/portfolio.png",
    tags: ["All", "Web"],
    description: "Created a personal portfolio using Next.js and Tailwind CSS, featuring a modern, responsive design and optimized performance for showcasing projects and skills.",
    gitUrl: "https://github.com/abhikhatri67/portfolio",
    previewUrl: "https://abhishek-khatri-portfolio.netlify.app",
    id: 2,
  },
  {
    title: "Countries App",
    imgUrl: "/images/Project-countries-app.png",
    tags: ["All", "Web"],
    description: "Developed a Countries App using HTML, CSS, and JavaScript, featuring dynamic country data display, search functionality, and responsive design for an interactive user experience.",
    gitUrl: "https://github.com/abhikhatri67/Countries-App",
    previewUrl: "https://countries-app-challenge.netlify.app",
    id: 3,
  },
  {
    title: "URL Shortner",
    imgUrl: "/images/Project-shortly.png",
    tags: ["All", "Web"],
    description: "Developed a URL Shortener in JavaScript, enabling users to create and manage shortened URLs with ease and efficiency.",
    gitUrl: "https://github.com/abhikhatri67/Shortly-JS",
    previewUrl: "https://shortly-js.netlify.app",
    id: 4,
  },
  {
    title: "Youtube Clone",
    imgUrl: "/images/Project-youtube-clone.png",
    tags: ["All", "Web"],
    description: "Developed a YouTube Clone using HTML, CSS, and JavaScript, featuring responsive design, dynamic video playback, and interactive user elements to mimic the core functionality of YouTube.",
    gitUrl: "https://github.com/abhikhatri67/youtube-clone",
    previewUrl: "https://youtube-clone-js.netlify.app/",
    id: 5,
  },
  {
    title: "Books Rest",
    imgUrl: "",
    tags: ["All"],
    description: "Developed a book management system using Node.js, Express, and MongoDB.",
    gitUrl: "https://github.com/abhikhatri67/book-rest",
    previewUrl: "/",
    id: 6,
  },
  {
    title: "Books GraphQL",
    imgUrl: "",
    tags: ["All"],
    description: "Developed a book management system using Node.js and GraphQL.",
    gitUrl: "https://github.com/abhikhatri67/GraphQL-Books",
    previewUrl: "/",
    id: 7,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Web");

  const handleTagChange = newTag => {
    setTag(newTag);
  };

  const filteredProjects = PROJECTS.filter(project => project.tags.includes(tag));

  return (
    <div className="text-white" id="projects">
      <h2 className="text-center mt-4 mb-4 text-4xl font-bold">My Projects</h2>
      <div className="text-center flex flex-row justify-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag == "Web"} />
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag == "All"} />
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
