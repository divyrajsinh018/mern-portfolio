import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover group-hover:scale-105 transition"
      />
      <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow">
        <div>
          <h3 className="font-semibold text-base">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.category}</p>
        </div>
        <Link to={`/projects/${project.slug}`}>
          <FaLocationArrow className="text-gray-700 hover:text-pink-600 transition" />
        </Link>
      </div>
    </div>
  );
}
