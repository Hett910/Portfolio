import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["WORK", "ABOUT", "CONTACT"];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      color: "#3B82F6",
      transition: { duration: 0.2 },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    hover: {
      scaleX: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.header
      className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Animated Logo with Blue Hover */}
          <motion.div className="relative group" variants={itemVariants}>
            <motion.a
              href="#"
              className="font-mono text-lg font-medium text-gray-300 flex items-center"
              whileHover={{ color: "#3B82F6" }}
            ></motion.a>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden p-2 md:flex items-center justify-center w-full relative">
            {/* Your name with elegant animation - positioned absolutely on left */}
            <motion.div
              className="absolute left-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="#"
                className="text-2xl font-bold tracking-tight relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white mr-2">Het</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
                  SONI
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.a>
            </motion.div>

            {/* Centered navigation items with enhanced animations */}
            <div className="flex space-x-12">
              {["About Me", "Skills", "Projects"].map((item) => (
                <motion.div
                  key={item}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 text-lg font-medium tracking-wider relative group"
                    whileHover={{
                      color: "#3B82F6",
                      y: -2,
                    }}
                  >
                    {item}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Contact Me button with floating animation */}
            <motion.div
              className="absolute right-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="text-white rounded-lg bg-gray-800 hover:bg-gray-700 px-8 py-4 text-sm tracking-wider transition-all duration-300 border border-gray-700 hover:border-indigo-600"
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </nav>
          {/* Animated Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-400 z-50 p-2 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              color: "#3B82F6",
            }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FaTimes size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FaBars size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-4 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-400 hover:text-blue-500 text-lg font-medium py-2 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                    <div className="h-px bg-gray-800 mt-2"></div>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
