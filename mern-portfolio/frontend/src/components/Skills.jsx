import { FaGlobe, FaServer, FaReact, FaDatabase } from "react-icons/fa";

const services = [
  {
    name: "Frontend Development",
    icon: <FaReact className="text-3xl text-white" />,
    desc: "Building responsive, interactive, and modern UIs using React.js and Tailwind CSS.",
    bg: "bg-blue-500 dark:bg-blue-600",
  },
  {
    name: "Backend Development",
    icon: <FaServer className="text-3xl text-white" />,
    desc: "Creating RESTful APIs, server-side logic, and database integration using Node.js and Express.",
    bg: "bg-green-500 dark:bg-green-600",
  },
  {
    name: "Database Management",
    icon: <FaDatabase className="text-3xl text-white" />,
    desc: "Designing and managing databases with MongoDB for scalable and efficient data storage.",
    bg: "bg-purple-500 dark:bg-purple-600",
  },
  {
    name: "Full Stack Web App",
    icon: <FaGlobe className="text-3xl text-white" />,
    desc: "Developing complete MERN stack applications, from frontend to backend with deployment readiness.",
    bg: "bg-pink-500 dark:bg-pink-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-[108%] section py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h3 className="text-gray-500 dark:text-gray-400 uppercase">What I offer</h3>
        <h2 className="section-title text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          My Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
          I am a MERN stack developer with experience in building scalable and modern web applications using MongoDB, Express, React, and Node.js.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="p-6 rounded-2xl shadow-md border bg-white dark:bg-gray-900 hover:shadow-lg transition"
            >
              <div className={`${s.bg} inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4`}>
                {s.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{s.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{s.desc}</p>
              <a
                href="#"
                className="text-sm text-gray-800 dark:text-gray-200 font-medium mt-4 inline-flex items-center"
              >
                Read more <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
