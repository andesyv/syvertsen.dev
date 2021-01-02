import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects: React.FC = () => {
  const projects = useContext(PortfolioContext).projects;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, link, repo, img, id } = project;
            const twoColumns: boolean = img != undefined;

            return (
              <Row key={id}>
                <Col lg={twoColumns ? 4 : 12} sm={12}>
                  <Fade
                    direction={isDesktop ? 'right' : 'up'}
                    duration={1000}
                    delay={500}
                    /* distance="30px" */
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        {info.map((inf: string, i) => (
                          <p key={i}>
                            {inf ||
                              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                        ))}
                        {/* <p className="mb-4">{info2 || ''}</p> */}
                      </div>
                      {link && (
                        <a
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={link.url}
                        >
                          {link.text || 'See Live'}
                        </a>
                      )}
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                {twoColumns && (
                  <Col lg={8} sm={12}>
                    <Fade
                      direction={isDesktop ? 'left' : 'up'}
                      duration={1000}
                      delay={1000}
                      /* distance="30px" */
                    >
                      <div className="project-wrapper__image">
                        <a
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                          {...(link ? { href: link.url } : {})}
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img as string} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                )}
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
