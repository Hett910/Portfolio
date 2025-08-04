import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import myProfileImage from "../../public/Speech.png";
import { FaDownload, FaMedium } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const xPos = e.clientX - rect.left;
      const yPos = e.clientY - rect.top;
      setMousePosition({ x: xPos, y: yPos });
      x.set(xPos);
      y.set(yPos);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      className="min-h-screen bg-gray-950 flex items-center px-4 sm:px-6 relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic torchlight effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(75, 85, 99, 0.15), transparent 80%)`,
        }}
      />

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-16 pb-16 md:pt-0 md:pb-0">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1 mt-8 md:mt-0">
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-gray-600 pl-4 md:pl-6 relative group"
              whileHover={{ borderLeftColor: "#4F46E5" }}
            >
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 md:mb-4 group-hover:text-white transition-colors duration-300">
                Full-Stack Developer
              </h1>
              <h2 className="text-gray-400 text-xl sm:text-2xl md:text-3xl font-light group-hover:text-gray-300 transition-colors duration-300">
                MERN & .NET Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed hover:text-gray-400 transition-colors duration-300"
            >
              Full-stack developer with experience in building scalable web
              applications using the MERN stack and .NET. Skilled in API
              development and intuitive UI design.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-5 pt-2 md:pt-4">
              <motion.a
                whileHover={{
                  y: -3,
                  boxShadow: "0 5px 15px rgba(79, 70, 229, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="text-white rounded-lg bg-gray-800 hover:bg-gray-700 px-6 py-3 md:px-8 md:py-4 text-sm tracking-wider transition-all duration-300 border border-gray-700 hover:border-indigo-600"
              >
                View Projects
              </motion.a>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl blur-sm opacity-75 group-hover:bg-gradient-to-r from-indigo-400 to-indigo-600 transition-all duration-600 "></div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center text-white px-5 py-2.5 md:px-6 md:py-3.5 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-transparent text-sm md:text-base"
                  href="/HettSoni_BackendDeveloper.pdf"
                >
                  <span>Get Resume</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4 md:space-x-6 pt-6 md:pt-8">
              <motion.a
                whileHover={{
                  y: -3,
                  color: "#4F46E5",
                }}
                href="https://github.com/Hett910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
              >
                <FaGithub size={20} className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                whileHover={{
                  y: -3,
                  color: "#4F46E5",
                }}
                href="https://www.linkedin.com/in/het-soni-b89857257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
              >
                <FaLinkedin size={20} className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                whileHover={{
                  y: -3,
                  color: "#4F46E5",
                }}
                href="https://medium.com/me/stories/public"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
              >
                <FaMedium size={20} className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image - shown first on mobile */}
          <motion.div
            variants={imageVariants}
            className="lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
              <div className="absolute inset-0 border-2 border-gray-700 rounded-lg transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300"></div>
              <div className="absolute inset-0 border border-gray-800 rounded-lg overflow-hidden group-hover:border-indigo-500 transition-colors duration-300">
                <img
                  src={myProfileImage}
                  alt="Professional Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {["tl", "tr", "bl", "br"].map((corner) => (
                <div
                  key={corner}
                  className={`absolute ${
                    corner === "tl" ? "top-0 left-0 border-t-2 border-l-2" : ""
                  } 
                              ${
                                corner === "tr"
                                  ? "top-0 right-0 border-t-2 border-r-2"
                                  : ""
                              }
                              ${
                                corner === "bl"
                                  ? "bottom-0 left-0 border-b-2 border-l-2"
                                  : ""
                              }
                              ${
                                corner === "br"
                                  ? "bottom-0 right-0 border-b-2 border-r-2"
                                  : ""
                              }
                              w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-gray-600 z-20 group-hover:border-indigo-400 transition-colors duration-300`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const aboutSection = document.getElementById("about-me");
            if (aboutSection) {
              aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          <span className="text-xs text-gray-500 mb-2">Explore More</span>
          <motion.svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;