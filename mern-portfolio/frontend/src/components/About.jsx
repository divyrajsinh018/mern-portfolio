import { Code2, GraduationCap, Briefcase } from "lucide-react";
import myImg from "../assets/divyrajsinh_zala_Abu2_2025.jpg";


import vsCode from "../assets/icons/Visual_Studio_Code_1.35_icon.svg.png";
import gitHub from "../assets/icons/github.png"; 
import mongo from "../assets/icons/mongodb.png"; 
import postman from "../assets/icons/Postman_Icon.png"; 
import figma from "../assets/icons/figma-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.webp"; // Ensure transparent background

export default function About() {
  return (
    <section
      id="about"
      className="w-[108%] bg-gray-50 dark:bg-gray-950 py-20 font-sans"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Introduction
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src={myImg}
              alt="My portrait"
              className="w-72 h-96 object-cover rounded-3xl shadow-lg border-4 border-white dark:border-gray-900"
            />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
              I am an experienced Frontend Developer with expertise in building
              modern, scalable web applications. Throughout my career, I’ve had
              the privilege of collaborating with organizations to contribute to
              their success and growth.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: (
                    <Code2 className="mx-auto h-6 w-6 text-gray-700 dark:text-gray-200 mb-2" />
                  ),
                  title: "Languages",
                  text: "HTML, CSS, JavaScript, React.js, Next.js",
                },
                {
                  icon: (
                    <GraduationCap className="mx-auto h-6 w-6 text-gray-700 dark:text-gray-200 mb-2" />
                  ),
                  title: "Education",
                  text: "BCA in Computer Science",
                },
                {
                  icon: (
                    <Briefcase className="mx-auto h-6 w-6 text-gray-700 dark:text-gray-200 mb-2" />
                  ),
                  title: "Projects",
                  text: "Built 5+ full-stack projects",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 px-6 py-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm text-center h-[120px] flex flex-col justify-center hover:shadow-lg hover:scale-105 transition-all"
                >
                  {card.icon}
                  <h3 className="font-medium text-gray-900 dark:text-white text-base">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Tools I Use
              </h3>
              <div className="flex flex-wrap gap-5">
                {[vsCode, gitHub, mongo, postman, figma].map((tool, idx) => (
                  <div
                    key={idx}
                    className="w-16 h-16 flex items-center justify-center rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <img
                      src={tool}
                      alt="tool"
                      className={`w-8 h-8 object-contain ${
                        tool === gitHub || tool === mongo || tool === postman
                          ? "dark:invert"
                          : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
