"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 6,
    title: "tabnews Clone",
    description:
      "Implementation of https://www.tabnews.com.br/, to reproduce and learn concepts with curso.dev",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Ongoing"],
    gitUrl: "https://github.com/juliolouzz/clone-tabnews",
    previewUrl: "https://clone-tabnews-nine-lemon.vercel.app/",
  },
  {
    id: 5,
    title: "Static Site Generator",
    description:
      "This project is a static site generator written in Python. It takes Markdown content and converts it into HTML, copying static assets and applying templates to create a fully functional static website.",
    image: "/images/projects/gif_preview_static_site.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/juliolouzz/Static-Site-Generator",
    previewUrl: "https://github.com/juliolouzz/Static-Site-Generator",
  },
  {
    id: 4,
    title: "GreenJet Airlines Bootstrap",
    description:
      "A project made for the National college of Ireland using Bootstrap and JavaScript. It is a responsive website for an airline company. with a few animations and transitions.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/juliolouzz/GreenJet-Bootstrap",
    previewUrl: "https://juliolouzz.github.io/GreenJet-Bootstrap/",
  },
  {
    id: 3,
    title: "Maze Solver",
    description:
      "This project is a graphical maze generator and solver built using Python's Tkinter library.",
    image: "/images/projects/maze.gif",
    tag: ["All", "Ongoing"],
    gitUrl: "https://github.com/juliolouzz/Maze_Solver",
    previewUrl: "https://github.com/juliolouzz/Maze_Solver",
  },
  {
    id: 2,
    title: "To be added",
    description: "description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 1,
    title: "To be added",
    description: "description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Ongoing"
          isSelected={tag === "Ongoing"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
