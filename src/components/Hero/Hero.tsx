import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header: React.FC = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
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
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
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
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
