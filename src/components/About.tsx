import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Row } from 'react-bootstrap';
import Title from './Title';
// import AboutImg from '../Image/AboutImg';
import { DateTime, Interval } from 'luxon';

const About: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  const birthday = DateTime.local(1997, 3, 6);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          {/* <Col md={6} sm={12}>
            <Fade duration={1000} delay={600} direction="up" /* distance="30px" >
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={'profile.jpg'} />
              </div>
            </Fade>
          </Col> */}
          {/* <Col md={6} sm={12}> */}
          <Fade
            direction={isDesktop ? 'right' : 'up'}
            duration={1000}
            delay={1000} /* distance="30px" */
            triggerOnce={true}
          >
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                {`I'm a fullstack developer with a passion for computer graphics and real-time rendering. ${Math.floor(
                  Interval.fromDateTimes(birthday, DateTime.local()).length('years')
                )} years of age, I am currently taking a masters degree in informatics specialized in visualization. I also have a bachelors degree in games and games technology.`}
              </p>
              <p className="about-wrapper__info-text">
                {'Contact me about anything at '}
                <span className="about-wrapper__info-text-code">
                  {'<topic or whatever>@syvertsen.dev'}
                </span>
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
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default About;
