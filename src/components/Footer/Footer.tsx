import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { IFooterData } from '../../data/data';

const Footer: React.FC = () => {
  const { footer } = useContext(PortfolioContext);
  const networks = footer.networks;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network: IFooterData) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'syvertsen.dev'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">© {new Date().getFullYear()} Anders Syvertsen</p>
        <GithubButtons repo="andesyv/syvertsen.dev" type="star" />
        <GithubButtons repo="andesyv/syvertsen.dev" type="issue" />
        <p className="footer__text">
          Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
        <GithubButtons repo="cobidev/gatsby-simplefolio" type="fork" />
        <GithubButtons repo="cobidev/gatsby-simplefolio" type="star" />
      </Container>
    </footer>
  );
};

export default Footer;
