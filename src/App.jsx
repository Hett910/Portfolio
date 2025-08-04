// import React, { useState } from 'react';
// import Header from './Components/Header';
// import Hero from './Components/Hero';
// import WorkExp from './Components/WorkExp';
// import Skill from './Components/Skill';
// import Projects from './Components/Projects';
// import Contact from './Components/Contace';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className="relative">
//       <Header />
//       <main>
//         <section id="hero">
//           <Hero />
//         </section>
        
//         <section id="about-me" className="scroll-mt-20">
//           <WorkExp />
//         </section>
        
//         <section id="skills" className="scroll-mt-20">
//           <Skill />
//         </section>
        
//         <section id="projects" className="scroll-mt-20">
//           <Projects />
//         </section>
        
//         <section id="contact" className="scroll-mt-20">
//           <Contact />
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from 'react'
import './App.css'
import Contace from './Components/Contace'
import Skill from './Components/Skill'
import WorkExp from './Components/WorkExp' 
import Hero from '../src/Components/Hero'
import Header from '../src/Components/Header'
import Projects from './Components/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Hero/> 
     <WorkExp />
     <Skill />
     <Projects />
     <Contace />
    </>
  )
}

export default App
