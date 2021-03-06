import React, { useState, useEffect, useCallback } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

import { PortfolioProvider } from '../context/context';

import { projectsData, IProjectData, footerData, IData } from '../data/data';

const App: React.FC = () => {
  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [footer, setFooter] = useState<IData['footer']>({} as any);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  const isBirthday = useCallback(() => {
    const today = new Date();
    return today.getDate() == 6 && today.getMonth() == 2;
  }, []);

  return (
    <PortfolioProvider value={{ projects, footer }}>
      {isBirthday() && <Confetti width={width} height={height} />}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
