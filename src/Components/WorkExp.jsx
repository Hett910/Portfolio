import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const experiences = [
    {
      year: "2024–2025",
      role: "Backend Devloper",
      company: "A&S Tech Solutions",
      description:
        "Led backend development for scalable web applications by leveraging .NET Core for enterprise-level APIs and MSSQL for robust data management. Simultaneously contributed to Node.js services within MERN stack projects, enhancing performance, security, and maintainability. Collaborated closely with frontend teams, optimized database queries, and implemented RESTful APIs to support seamless integrations",
      skills: [".NET Core", "MSSQL"],
      type: "work",
    },
    {
      year: "2023-2024",
      role: "Backend Devloper",
      company: "Prydan Consultancy",
      description:
        "Worked on multiple backend services using Node.js and Express, implementing secure APIs and database operations with MongoDB. Contributed to full-stack projects by integrating backend logic with frontend applications built in React. Gained hands-on experience with Docker for containerization.",
      skills: ["Javascript", "React", "Node", "Express", "Mongodb", "Docker"],
      type: "education",
    },
    {
      year: "2022–2025",
      role: "Student At Gujarat University",
      company: "Gujarat University",
      description:
        "Successfully completed Bachelor of Computer Applications from Gujarat University with an excellent academic record (8.7 CGPA). Gained strong foundational knowledge in software engineering, databases, web development, and computer science principles. Actively participated in real-world projects, workshops, and coding challenges throughout the course.",
      skills: ["8.7 CGPA"],
      type: "work",
    },
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React Ecosystem", level: 88 },
    { name: "Node.js & Express", level: 85 },
    { name: ".NET Core", level: 82 },
    { name: "Database Design", level: 83 },
    // { name: "Cloud Infrastructure", level: 78 },
  ];

  const traits = [
    "Analytical Problem Solving",
    "Quick Adaptability to New Technologies",
    "Writing Clean and Maintainable Code",
    "Agile and Scrum Practices",
    "Continuous Self-Improvement",
    "Effective Team Collaboration",
    "Attention to Detail",
    "Strong Communication Skills",
    "Passion for Full Stack Development",
    "Proactive and Self-Motivated",
  ];

  return (
    <section
      id="about-me"
      className="py-24 bg-gray-950 px-6 overflow-hidden relative"
    >
      {/* Floating Tech Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-800 text-xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            transition: {
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {["</>", "{ }", "();", "=>", "[]", "#"][i % 6]}
        </motion.div>
      ))}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900 filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-900 filter blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <h2 className="text-gray-400 text-xs tracking-widest mb-3 font-mono relative inline-block">
            <motion.span
              className="absolute -left-6 top-1/2 w-4 h-0.5 bg-blue-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            PROFESSIONAL JOURNEY
            <motion.span
              className="absolute -right-6 top-1/2 w-4 h-0.5 bg-blue-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </h2>
          <motion.h1
            className=" text-4xl md:text-5xl font-bold  text-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            About{" "}
            <motion.span
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
              animate={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              Me
            </motion.span>
          </motion.h1>
          <motion.div
            className="w-20 h-0.5 bg-gray-800 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline Column */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Animated Timeline line */}
              <motion.div
                className="absolute left-6 top-0 h-full w-0.5 bg-gray-800 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative mb-12 pl-16"
                >
                  {/* Animated Timeline dot */}
                  <motion.div
                    className={`absolute left-0 top-2 w-4 h-4 rounded-full ${
                      exp.type === "work" ? "bg-blue-500" : "bg-indigo-500"
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                      delay: index * 0.1 + 0.5,
                    }}
                    viewport={{ once: true }}
                  />

                  {/* Year badge with animation */}
                  <motion.div
                    className={`absolute -left-2 top-0 px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === "work"
                        ? "bg-blue-900 text-blue-100"
                        : "bg-indigo-900 text-indigo-100"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {exp.year}
                  </motion.div>

                  {/* Content Card with Hover Effect */}
                  <motion.div
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500 transition-colors relative overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {/* Subtle hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    <h3 className="text-xl text-gray-100 mb-1 relative z-10">
                      {exp.role}
                    </h3>
                    <motion.p
                      className="text-blue-400 mb-4 relative z-10"
                      whileHover={{ x: 3 }}
                    >
                      {exp.company}
                    </motion.p>
                    <p className="text-gray-400 mb-4 relative z-10">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + i * 0.05,
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            y: -3,
                            backgroundColor:
                              exp.type === "work"
                                ? "rgba(59, 130, 246, 0.2)"
                                : "rgba(99, 102, 241, 0.2)",
                          }}
                          className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700 cursor-default transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm h-full relative overflow-hidden"
              whileHover={{
                borderColor: "rgba(59, 130, 246, 0.5)",
              }}
            >
              {/* Floating dots background */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-500"
                    style={{
                      width: `${Math.random() * 6 + 2}px`,
                      height: `${Math.random() * 6 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, (Math.random() - 0.5) * 40],
                      x: [0, (Math.random() - 0.5) * 40],
                      opacity: [0.1, 0.3, 0.1],
                      transition: {
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  />
                ))}
              </div>

              <h3 className="text-xl text-gray-100 mb-8 border-b border-gray-800 pb-3 relative z-10">
                Technical Skills
              </h3>

              <div className="space-y-6 relative z-10">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <motion.span
                        className="text-gray-300 text-sm"
                        whileHover={{ x: 3 }}
                      >
                        {skill.name}
                      </motion.span>
                      <span className="text-gray-500 text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          damping: 10,
                        }}
                        viewport={{ once: true }}
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl text-gray-100 mt-12 mb-6 border-b border-gray-800 pb-3 relative z-10">
                Professional Traits
              </h3>

              <div className="flex flex-wrap gap-3 relative z-10">
                {traits.map((trait, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.05,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                    }}
                    className="text-xs bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full border border-gray-700 cursor-default transition-all"
                  >
                    {trait}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
