import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade direction="up" duration={1000} delay={800} /* distance="30px" */ triggerOnce={true}>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{'Would you like to work with me? Awesome!'}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={'mailto:andesyv@gmail.com'}
            >
              {"Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
