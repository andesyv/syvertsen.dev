import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';

interface Props {
  title?: string;
}

const Title: React.FC<Props> = ({ title }) => (
  <Fade direction="up" duration={1000} delay={300} /* distance="0px" */ triggerOnce={true}>
    <h2 className="section-title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
