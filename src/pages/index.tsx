import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';
import { GetStaticProps } from 'next';

// Components:
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Data:
import { PortfolioProvider } from '../context/context';
import { projectsData, footerData, IData } from '../data/data';

const Body: React.FC<IData> = (props) => {
  const [width, height] = useWindowSize();

  const isBirthday = useCallback(() => {
    const today = new Date();
    return today.getDate() == 6 && today.getMonth() == 2;
  }, []);

  return (
    <PortfolioProvider value={props}>
      {isBirthday() && <Confetti width={width} height={height} />}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

const App: React.FC<IData> = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Syvertsen.dev'}</title>
        <html lang="en" />
        <meta name="description" content={'Syvertsen.dev'} />
      </Helmet>
      <Body {...props} />
    </>
  );
};

export default App;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { projects: projectsData, footer: footerData },
  };
};
