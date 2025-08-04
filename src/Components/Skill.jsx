import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: [
        { name: "React", level: 88 },
        { name: "Javascript", level: 85 },
        { name: "Responsive Design", level: 82 },
        { name: "Tailwind CSS", level: 90 },
      ],
      color: "from-blue-500 to-blue-300",
    },
    {
      title: "Backend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Express", level: 85 },
        { name: ".NET Core", level: 82 },
        { name: "REST APIs", level: 90 },
      ],
      color: "from-emerald-500 to-emerald-300",
    },
    {
      title: "Database Systems",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
      ),
      skills: [
        { name: "MongoDB", level: 83 },
        { name: "PostgreSQL", level: 78 },
        { name: "Entity Framework", level: 75 },
        { name: "Mongoose", level: 82 },
      ],
      color: "from-purple-500 to-purple-300",
    },
    // {
    //   title: "DevOps & Cloud",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    //     </svg>
    //   ),
    //   skills: [
    //     { name: "AWS", level: 75 },
    //     { name: "Docker", level: 80 },
    //     { name: "CI/CD Pipelines", level: 78 },
    //     { name: "Azure", level: 70 }
    //   ],
    //   color: "from-amber-500 to-amber-300"
    // },
    // {
    //   title: "Software Practices",
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    //     </svg>
    //   ),
    //   skills: [
    //     { name: "Clean Architecture", level: 85 },
    //     { name: "Agile Methodology", level: 90 },
    //     { name: "Code Review", level: 88 },
    //     { name: "Technical Documentation", level: 83 }
    //   ],
    //   color: "from-pink-500 to-pink-300"
    // },
    {
      title: "Other Technologies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: [
        { name: "Git Version Control", level: 92 },
        { name: "Websockets", level: 75 },
        { name: "Jest Testing", level: 80 },
        { name: "GraphQL", level: 78 },
      ],
      color: "from-indigo-500 to-indigo-300",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-950 px-5 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-blue-400 mb-3 tracking-wider">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Skills
            </span>{" "}
            & Abilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-700 group"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-md mr-4`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.05 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Legend */}
        {/* Technology Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-800 overflow-hidden"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-sm font-medium text-gray-400 mb-8 tracking-wider">
              TECHNOLOGIES I WORK WITH
            </h4>
          </div>

          <div className="relative">
            {/* Gradient fade effects */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

            {/* Scrolling marquee */}
            <div className="py-4">
              <motion.div
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex whitespace-nowrap"
              >
                {[
                  {
                    name: "React",
                    icon: "react/react-original",
                    color: "text-blue-400",
                  },
                  {
                    name: "JavaScript",
                    icon: "javascript/javascript-original",
                    color: "text-yellow-400",
                  },
                  {
                    name: "GraphQL",
                    icon: "graphql/graphql-plain",
                    color: "text-pink-500",
                  },
                  {
                    name: "Node.js",
                    icon: "nodejs/nodejs-original",
                    color: "text-green-400",
                  },
                  {
                    name: "Express",
                    icon: "express/express-original",
                    color: "text-gray-400",
                  },
                  {
                    name: ".NET Core",
                    icon: "dot-net/dot-net-original",
                    color: "text-purple-400",
                  },
                  // {
                  //   name: "REST APIs",
                  //   icon: "nestjs/nestjs-plain",
                  //   color: "text-red-400",
                  // },
                  {
                    name: "MongoDB",
                    icon: "mongodb/mongodb-original",
                    color: "text-green-400",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "postgresql/postgresql-original",
                    color: "text-blue-400",
                  },
                  {
                    name: "Entity Framework",
                    icon: "dot-net/dot-net-original",
                    color: "text-purple-400",
                  },
                  // {
                  //   name: "Mongoose",
                  //   icon: "mongoose/mongoose-original",
                  //   color: "text-red-400",
                  // },
                  {
                    name: "Git",
                    icon: "git/git-original",
                    color: "text-orange-400",
                  },
                  {
                    name: "GitHub",
                    icon: "github/github-original",
                    color: "text-gray-800", // GitHub's dark color
                  },
                  
                  {
                    name: "GraphQL",
                    icon: "graphql/graphql-plain",
                    color: "text-pink-400",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center mx-6 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-${
                      tech.color.split("-")[1]
                    }-400 transition-all group`}
                  >
                    <div className="w-8 h-8 mr-3 relative">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                      <div
                        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md ${tech.color.replace(
                          "text",
                          "bg"
                        )} transition-opacity duration-300`}
                      ></div>
                    </div>
                    <span
                      className={`text-gray-300 group-hover:${tech.color} transition-colors`}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}

                {/* Duplicate for seamless looping */}
                {[
                  {
                    name: "React",
                    icon: "react/react-original",
                    color: "text-blue-400",
                  },
                  {
                    name: "JavaScript",
                    icon: "javascript/javascript-original",
                    color: "text-yellow-400",
                  },
                  {
                    name: "Responsive Design",
                    icon: "html5/html5-original",
                    color: "text-orange-400",
                  },
                  {
                    name: "GraphQL",
                    icon: "graphql/graphql-plain",
                    color: "text-pink-500",
                  },
                  {
                    name: "Node.js",
                    icon: "nodejs/nodejs-original",
                    color: "text-green-400",
                  },
                  {
                    name: "Express",
                    icon: "express/express-original",
                    color: "text-gray-400",
                  },
                  {
                    name: ".NET Core",
                    icon: "dot-net/dot-net-original",
                    color: "text-purple-400",
                  },
                  // {
                  //   name: "REST APIs",
                  //   icon: "nestjs/nestjs-plain",
                  //   color: "text-red-400",
                  // },
                  {
                    name: "MongoDB",
                    icon: "mongodb/mongodb-original",
                    color: "text-green-400",
                  },
                  {
                    name: "PostgreSQL",
                    icon: "postgresql/postgresql-original",
                    color: "text-blue-400",
                  },
                  {
                    name: "Entity Framework",
                    icon: "dot-net/dot-net-original",
                    color: "text-purple-400",
                  },
                  // {
                  //   name: "Mongoose",
                  //   icon: "mongoose/mongoose-original",
                  //   color: "text-red-400",
                  // },
                  {
                    name: "Git",
                    icon: "git/git-original",
                    color: "text-orange-400",
                  },
                  {
                    name: "GitHub",
                    icon: "github/github-original",
                    color: "text-gray-800", // GitHub's dark color
                  },
                
                  {
                    name: "GraphQL",
                    icon: "graphql/graphql-plain",
                    color: "text-pink-400",
                  },
                ].map((tech, index) => (
                  <div
                    key={`dup-${index}`}
                    className={`inline-flex items-center mx-6 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-${
                      tech.color.split("-")[1]
                    }-400 transition-all group`}
                  >
                    <div className="w-8 h-8 mr-3 relative">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg`}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                      <div
                        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md ${tech.color.replace(
                          "text",
                          "bg"
                        )} transition-opacity duration-300`}
                      ></div>
                    </div>
                    <span
                      className={`text-gray-300 group-hover:${tech.color} transition-colors`}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
