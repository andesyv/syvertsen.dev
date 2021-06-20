import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade
            direction={'up'}
            duration={1000}
            delay={500} /* distance="30px" */
            triggerOnce={true}
          >
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Image src={'/Profiler.jpg'} alt={'profile'} width={500} height={500} />
          <Fade
            direction={'up'}
            duration={1000}
            delay={1000} /* distance="30px" */
            triggerOnce={true}
          >
            <p className="hero-cta justify-content-center">
              {/* <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link> */}
              <Link href="/">
                <a>Go back</a>
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default App;
