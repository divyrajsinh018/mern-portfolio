import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Mail } from "lucide-react";
import BackgroundBubbles from "./BackgroundBubbles";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubbles, setShowBubbles] = useState(true);

  useEffect(() => {
    const homeEl = document.querySelector("#home");
    if (!homeEl) {
      setShowBubbles(false);
      return;
    }

    // Observer to check if Home is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBubbles(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      { root: null, threshold: [0, 0.2, 1], rootMargin: "-64px 0px 0px 0px" }
    );

    observer.observe(homeEl);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm font-sans">
      {/* ✅ Show bubbles only on Home */}
      {showBubbles && <BackgroundBubbles />}

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Your SVG Logo */}
        <a href="#home" className="flex items-center">
          <svg
            className="w-40 h-10 fill-current text-gray-900 dark:text-white"
            viewBox="0 0 225 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3382_3712)">
              <g clipPath="url(#clip1_3382_3712)">
                {/* Left Icon */}
                <path d="M33.9901 20C33.9901 9.16185 25.416 0.340529 14.7157 0.0101348C14.509 0.00405392 14.3022 0 14.0934 0H0V22.4871H12.332C12.5063 22.4871 12.6786 22.4688 12.8428 22.4344C13.9718 22.1972 14.8191 21.2 14.8191 20C14.8191 18.6257 13.7063 17.5129 12.332 17.5129H4.14513V4.14513H14.0934C14.2394 4.14513 14.3995 4.14716 14.59 4.15324C18.6845 4.27891 22.5195 5.98155 25.3836 8.94497C28.2599 11.9205 29.8429 15.8468 29.8429 20C29.8429 24.1532 28.2599 28.0795 25.3836 31.055C22.5195 34.0184 18.6845 35.7211 14.586 35.8468C14.3995 35.8528 14.2374 35.8549 14.0934 35.8549H4.14513V31.2962H14.5799C14.6853 31.2962 14.7887 31.2942 14.8941 31.2902C20.3162 31.1037 24.662 26.1214 24.662 20C24.662 13.8786 20.3162 8.89632 14.8941 8.70984C14.7887 8.70579 14.6853 8.70376 14.5799 8.70376H8.29026V13.0658H14.5799C14.6407 13.0658 14.7015 13.0678 14.7623 13.0698C16.2582 13.1205 17.6771 13.8299 18.7514 15.0704C19.8885 16.3839 20.5169 18.1332 20.5169 19.998C20.5169 21.8628 19.8885 23.612 18.7514 24.9255C17.6751 26.164 16.2582 26.8754 14.7603 26.9261C14.7015 26.9281 14.6407 26.9302 14.5799 26.9302H4.14513V26.9687H0V39.9959H14.0934C14.3002 39.9959 14.5069 39.9919 14.7157 39.9858C25.416 39.6554 33.9901 30.8341 33.9901 19.9959V20Z" />
              </g>
            </g>
            {/* Text DIVYRAJSINH.COM */}
            <text
              x="45"
              y="26"
              className="fill-current text-gray-900 dark:text-white"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="14"
              fontWeight="700"
              letterSpacing=".08em"
            >
              DIVYRAJSINH.COM
            </text>
            <defs>
              <clipPath id="clip0_3382_3712">
                <rect width="225" height="40" />
              </clipPath>
              <clipPath id="clip1_3382_3712">
                <rect width="225" height="40" />
              </clipPath>
            </defs>
          </svg>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-pink-600 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Mail size={16} /> Contact
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-gray-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 dark:text-gray-200 hover:text-pink-600 transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
