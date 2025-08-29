import { FaGlobe, FaAndroid, FaBehance, FaImage } from "react-icons/fa";

const services = [
  {
    name: "Web design",
    icon: <FaGlobe className="text-3xl text-white" />,
    desc: "Web development is the process of building, programming...",
  },
  {
    name: "Mobile app",
    icon: <FaAndroid className="text-3xl text-white" />,
    desc: "Mobile app development involves creating software for mobile devices...",
  },
  {
    name: "UI/UX design",
    icon: <FaBehance className="text-3xl text-white" />,
    desc: "UI/UX design focuses on creating a seamless user experience...",
  },
  {
    name: "Graphics design",
    icon: <FaImage className="text-3xl text-white" />,
    desc: "Creative design solutions to enhance visual communication...",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-[108%] section py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h3 className="text-gray-500 uppercase">What I offer</h3>
        <h2 className="section-title text-4xl font-bold mb-4">My Services</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="p-6 rounded-2xl shadow-md border bg-white hover:shadow-lg transition"
            >
              <div className="bg-pink-500 inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold text-lg">{s.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
              <a
                href="#"
                className="text-sm text-gray-800 font-medium mt-4 inline-flex items-center"
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
