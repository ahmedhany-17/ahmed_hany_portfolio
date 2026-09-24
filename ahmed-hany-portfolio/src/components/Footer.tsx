import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { personal } from '../data/portfolio';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.copy}>
            © {year} Ahmed Hany. Built with React & Vite.
          </p>

          <div className={styles.links}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="GitHub profile"
            >
              <FiGithub aria-hidden="true" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="LinkedIn profile"
            >
              <FiLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
