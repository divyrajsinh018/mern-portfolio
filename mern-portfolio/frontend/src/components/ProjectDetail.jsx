import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetail({ projects }) {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const p = projects.find((proj) => proj.slug === slug);
    setProject(p);
  }, [slug, projects]);

  if (!project) {
    return <div className="p-8 text-center">Project not found.</div>;
  }

  return (
    <section className="section py-16">
      <div className="container mx-auto max-w-3xl">
        <Link to="/projects" className="flex items-center gap-2 text-pink-600 mb-6">
          <FaArrowLeft /> Back to Projects
        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover rounded-xl shadow mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700"
            >
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-500"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
