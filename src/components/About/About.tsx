import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade duration={1000} delay={600} direction="up" /* distance="30px" */>
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={'profile.jpg'} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              direction={isDesktop ? 'right' : 'up'}
              duration={1000}
              delay={1000} /* distance="30px" */
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'
                  }
                </p>
                <p className="about-wrapper__info-text">
                  {'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {/* resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                ) */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
