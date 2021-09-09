import { Link } from 'react-scroll';

import styles from '../style/modules/buttons.module.scss';

interface BigButtonProps {
  to: string;
}

interface PreviewButtonProps {
  url: string;
  text?: string;
}

interface RepoButtonProps {
  repo: string;
}

export const BigButton: React.FC<BigButtonProps> = (props) => (
  <p className={styles.hero_cta}>
    <span className={`${styles.cta_btn} ${styles.cta_btn__hero}`}>
      <Link to={props.to} smooth={true} duration={1000}>
        {props.children}
      </Link>
    </span>
  </p>
);

export const PreviewButton: React.FC<PreviewButtonProps> = (props) => (
  <a
    target="_blank"
    aria-label="Project Link"
    rel="noopener noreferrer"
    className={`${styles.cta_btn} ${styles.cta_btn__hero}`}
    href={props.url}
  >
    {props.text || 'See Live'}
  </a>
);

export const RepoButton: React.FC<RepoButtonProps> = (props) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.cta_btn} ${styles['text-color-main']}`}
    href={props.repo}
  >
    Source Code
  </a>
);
