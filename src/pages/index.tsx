import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';
import { GetStaticProps } from 'next';

// Components:
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

// Data:
import { PortfolioProvider } from '../context/context';
import { projectsData, footerData, IDataExtended, populateImageData } from '../data/data';

const AppHead: React.FC = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Syvertsen.dev</title>
      <html lang="en" />
      <meta name="description" content={'Syvertsen.dev'} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

const AppBody: React.FC<IDataExtended> = (props) => {
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
      <Footer />
    </PortfolioProvider>
  );
};

const App: React.FC<IDataExtended> = (props) => {
  return (
    <>
      <AppHead />
      <AppBody {...props} />
    </>
  );
};

export default App;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { projects: populateImageData(projectsData), footer: footerData },
  };
};
