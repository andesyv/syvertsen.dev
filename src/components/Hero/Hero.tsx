import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          direction={isDesktop ? 'right' : 'up'}
          duration={1000}
          delay={500} /* distance="30px" */
        >
          <h1 className="hero-title">
            {'Hi, my name is '}
            <span className="text-color-main">{'Anders Syvertsen'}</span>
            <br />
            {"I'm a fullstack developer and a computer graphics enthusiast."}
          </h1>
        </Fade>
        <Fade
          direction={isDesktop ? 'right' : 'up'}
          duration={1000}
          delay={1000} /* distance="30px" */
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth={true} duration={1000}>
                {'Learn more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
