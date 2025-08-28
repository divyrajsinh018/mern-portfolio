import { FaLocationArrow } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.github} // Direct link to GitHub
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-xl overflow-hidden shadow-md group block"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover group-hover:scale-105 transition"
      />
      <div className="absolute bottom-3 left-3 right-3 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 flex items-center justify-between shadow">
        <div>
          <h3 className="font-semibold text-base text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
        </div>
        <FaLocationArrow className="text-gray-700 dark:text-gray-300 hover:text-pink-600 transition cursor-pointer" />
      </div>
    </a>
  );
}
