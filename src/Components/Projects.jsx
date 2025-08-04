import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IT Sales Community Portal",
      tech: "MERN Stack",
      techShort: "MERN", // Added shorter version for mobile
      description:
        "A comprehensive platform connecting IT sales professionals with real-time interaction capabilities and knowledge sharing.",
      features: [
        "Secure JWT-based authentication system",
        "Integrated Google mailing service for notifications and communication",
        "Rapid development of RESTful APIs with clean architecture",
        "Admin dashboard for content moderation and user management",
      ],
      contribution:
        "Led development of RESTful APIs, designed MongoDB schemas, implemented authentication system, and built React UI components with responsive design.",
      color: "#6366F1",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "HR Management System",
      tech: ".NET Core & MSSQL Server",
      techShort: ".NET", // Added shorter version for mobile
      description:
        "Enterprise-grade solution for human resource management including employee lifecycle and payroll processing.",
      features: [
        "Streamlined employee onboarding workflows",
        "Integrated leave and attendance tracking system",
        "Robust role-based access control (RBAC)",
        "Automated payroll generation engine",
        "Real-time notification system using WebSockets",
        "End-to-end user interview process management",
      ],
      contribution:
        "Designed the entire database architecture and managed the complete backend development. Built employee management modules, optimized complex SQL queries, implemented email automation, and integrated dynamic reporting tools for efficient data insights.",
      color: "#10B981",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Letter Of Engagment System",
      tech: ".NET & MSSQL Server",
      techShort: ".NET", // Added shorter version for mobile
      description:
        "A centralized system for managing and delivering a company's services to multiple clients, with support for diverse service offerings and streamlined operations.",
      features: [
        "Dynamic document templating engine",
        "Digitized service provisioning workflows",
        "PDF generation with edit and management capabilities",
        "Version control with real-time diff comparison",
      ],
      contribution:
        "Architected document generation logic, integrated PDF manipulation tools, implemented email automation, and designed version control system.",
      color: "#F59E0B",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Applicant Tracking System",
      tech: "MERN Stack",
      techShort: "MERN", // Added shorter version for mobile
      description:
        "Modern recruitment platform for end-to-end hiring process management with advanced candidate evaluation.",
      features: [
        "Job posting management portal",
        "Comprehensive management of recruiter and candidate profiles",
        "Interview scheduling with calendar sync",
        "Analytics dashboard with hiring metrics",
      ],
      contribution:
        "Led backend development using Node.js, built RESTful APIs with robust pagination and filtering logic, implemented authentication and file handling, and developed scheduling and analytics modules. Also contributed to the React frontend for seamless integration.",
      color: "#EC4899",
      github: "#",
      live: "#",
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hoverEffect = {
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-28 bg-gray-950 px-4 sm:px-5 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900 rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-900 rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3 tracking-wider">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-3 sm:mb-4">
            Company{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Projects
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              whileHover={hoverEffect}
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm"
            >
              {/* Tech label - now with responsive text */}
              <div
                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[10px] xs:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border font-medium z-10 whitespace-nowrap"
                style={{
                  color: project.color,
                  borderColor: project.color,
                  backgroundColor: `${project.color}10`,
                }}
              >
                <span className="hidden sm:inline">{project.tech}</span>
                <span className="sm:hidden">{project.techShort}</span>
              </div>

              {/* Project content */}
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-1 sm:mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-gray-300 text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-400 mr-1 sm:mr-2 mt-0.5 sm:mt-1 text-xs sm:text-sm">▹</span>
                        <span className="text-gray-400 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-gray-800">
                  <h4 className="text-gray-300 text-[10px] xs:text-xs font-mono mb-2 sm:mb-3 uppercase tracking-wider">
                    My Contributions
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 flex space-x-3 sm:space-x-4">
                {/* Commented out buttons remain the same */}
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px at 50% 50%, ${project.color}20, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* View more projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          {/* Commented out view more link remains the same */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;