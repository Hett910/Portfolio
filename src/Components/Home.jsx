import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import WorkExp from './WorkExp';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const location = useLocation();

  // Handle scroll to section when coming from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <div className="space-y-20 pb-20">
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about-me" className="scroll-mt-20">
        <WorkExp />
      </section>
      
      <section id="skills" className="scroll-mt-20">
        <Skill />
      </section>
      
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Home;