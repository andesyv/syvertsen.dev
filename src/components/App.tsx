import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { projectsData, IProjectData, footerData, IData } from '../mock/data';

const App: React.FC = () => {
  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [footer, setFooter] = useState<IData['footer']>({} as any);

  useEffect(() => {
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ projects, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
