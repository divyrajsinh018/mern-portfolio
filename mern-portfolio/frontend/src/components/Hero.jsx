import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profilePic from "../assets/your-photo.jpg";
import BackgroundBubbles from "./BackgroundBubbles";
export default function Hero() {
  return (
    <section
      id="home"
      className="w-[108%] min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 font-sans overflow-x-hidden"
    >
       <BackgroundBubbles />
       
      {/* Profile Picture */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Intro Text */}
      <motion.h2
        className="text-lg text-gray-600 dark:text-gray-400 mb-2 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi! I'm Divyrajsinh 👋
      </motion.h2>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        frontend web developer <br /> based in Gujarat.
      </motion.h1>

      <motion.p
        className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I am a frontend developer from Gujarat, India with MERN stack experience,
        building modern, responsive applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <a
          href="#contact"
          className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-800 transition"
        >
          contact me →
        </a>
        <a
  href="/frontend/public/Divyrajsinh_Zala_MERN_Stack_Developer.pdf"
  download="Divyrajsinh_Zala_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  <Download size={16} /> my resume
</a>
      </motion.div>
    </section>
  );
}
