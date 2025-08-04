import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { SiMedium, SiWhatsapp } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const controls = useAnimation();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const socialLinks = [
    { name: "GitHub", icon: <FiGithub />, url: "https://github.com/Hett910" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/het-soni-b89857257/",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp />,
      url: "https://wa.me/+919974212669",
    },
    {
      name: "Medium",
      icon: <SiMedium />,
      url: "https://medium.com/me/stories/public",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_861qcpq",
        "template_wj0ti8q",
        formRef.current,
        "9ZapFBll3DCbvlikU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-900 rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-900 rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block text-sm font-medium text-indigo-400 mb-2 tracking-wider">
              LET'S CONNECT
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4"
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              Touch
            </span>
          </motion.h2>
          <motion.div variants={itemVariants}>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full"></div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-6">
              Send me a message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-900/30 border border-emerald-700 rounded-lg text-emerald-400 text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm"
                >
                  Oops! Something went wrong. Please try again or contact me directly.
                </motion.div>
              )}

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white rounded-lg bg-gray-800 hover:bg-gray-700 px-8 py-4 text-sm tracking-wider transition-all duration-300 border border-gray-700 hover:border-indigo-600 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-6">
                Contact information
              </h3>
              <div className="space-y-6">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:hettsoni910@gmail.com"
                  className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <div className="p-3 bg-indigo-900/30 rounded-lg mr-4 text-indigo-400">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email me at</p>
                    <p className="text-gray-200">hettsoni910@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://wa.me/+919974212669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <div className="p-3 bg-emerald-900/30 rounded-lg mr-4 text-emerald-400">
                    <SiWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Chat on WhatsApp</p>
                    <p className="text-gray-200">Text Me On WhatsApp</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-6">
                Social Links
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{
                      y: -3,
                      backgroundColor:
                        link.name === "WhatsApp"
                          ? "rgba(37, 211, 102, 0.1)"
                          : "rgba(79, 70, 229, 0.1)",
                    }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 p-4 border border-gray-800 rounded-lg transition-all ${
                      link.name === "WhatsApp"
                        ? "hover:border-emerald-500 text-emerald-400"
                        : "hover:border-indigo-500 text-indigo-400"
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-gray-200">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
