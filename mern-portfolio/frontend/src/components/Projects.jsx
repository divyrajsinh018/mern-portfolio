import ProjectCard from "./ProjectCard";
import frontendImg from "../assets/projects/frontend.jpg";
import geoImg from "../assets/projects/backend.webp";
import photoImg from "../assets/projects/webphoto.avif";
import uiuxImg from "../assets/projects/UX-UI.jpg";

export default function Projects() {
  const projects = [
    {
      slug: "portfolio-website",
      title: "My Portfolio Website",
      category: "Full-Stack MERN Development",
      image: frontendImg,
      github: "https://github.com/divyrajsinh018/mern-portfolio",
    },
    {
      slug: "ai-interview-prep",
      title: "AI-Powered Interview Prep App",
      category: "Full-Stack MERN Development",
      image: geoImg,
      github: "https://github.com/divyrajsinh018/Interviewprepai",
    },
    {
      slug: "ecommerce-customizer",
      title: "E-Commerce Product Customizer",
      category: "Frontend Development",
      image: photoImg,
      github: "#", // still in progress
    },
    {
      slug: "alliedge-clone",
      title: "Alliedge Technologies Website Clone",
      category: "Full-Stack MERN Development",
      image: uiuxImg,
      github: "https://github.com/divyrajsinh018/Alliedge-Group",
    },
  ];

  return (
    <section
      id="work"
      className="w-[108%] section py-16 md:py-24 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto text-center">
        <h3 className="text-gray-500 dark:text-gray-400 uppercase">Projects</h3>
        <h2 className="section-title text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          My Work as MERN Stack Developer
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
          Here’s a collection of my recent projects demonstrating my skills in full-stack web development with the MERN stack. Each project includes frontend and backend work, responsive design, authentication, and API integrations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
