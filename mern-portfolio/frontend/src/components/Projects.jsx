import ProjectCard from "./ProjectCard";
import frontendImg from "../assets/projects/frontend.jpg";
import geoImg from "../assets/projects/backend.webp";
import photoImg from "../assets/projects/webphoto.avif";
import uiuxImg from "../assets/projects/UX-UI.jpg";

export default function Projects() {
  const projects = [
    {
      slug: "frontend-project",
      title: "Frontend project",
      category: "Web Design",
      image: frontendImg,
      description: "A modern frontend project showcasing web design and UI components.",
      github: "https://github.com/your-username/frontend-project",
      demo: "https://your-demo-link.com",
    },
    {
      slug: "geo-based-app",
      title: "Geo based app",
      category: "Mobile App",
      image: geoImg,
      description: "Mobile app project with geo-location based features.",
      github: "https://github.com/your-username/geo-app",
      demo: "https://your-demo-link.com",
    },
    {
      slug: "photography-site",
      title: "Photography site",
      category: "Web Design",
      image: photoImg,
      description: "Photography portfolio website with image gallery and responsive design.",
      github: "https://github.com/your-username/photo-site",
      demo: "https://your-demo-link.com",
    },
    {
      slug: "uiux-designing",
      title: "UI/UX designing",
      category: "UI/UX Design",
      image: uiuxImg,
      description: "UI/UX design project focusing on user-friendly interfaces.",
      github: "https://github.com/your-username/uiux-design",
      demo: "https://your-demo-link.com",
    },
  ];

  return (
    <section id="work" className="w-[108%] section py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h3 className="text-gray-500 uppercase">My portfolio</h3>
        <h2 className="section-title text-4xl font-bold mb-4">My latest work</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
