import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { personal } from '../data/portfolio';
import { containerVariants, fadeUpVariants } from '../utils/animations';
import styles from './Contact.module.css';

const contactLinks = [
  {
    icon: <FiMail aria-hidden="true" />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    external: false,
  },
  {
    icon: <FiGithub aria-hidden="true" />,
    label: 'GitHub',
    value: 'github.com/ahmedhany-17',
    href: personal.github,
    external: true,
  },
  {
    icon: <FiLinkedin aria-hidden="true" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmed-hany-dev',
    href: personal.linkedin,
    external: true,
  },
];

const Contact: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-label="Contact">
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.inner}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUpVariants} className={styles.cta}>
            <span className="section-label">Contact</span>
            <h2 className={styles.ctaHeading}>Let's build something great.</h2>
            <p className={styles.ctaSubtitle}>
              Currently open to junior opportunities in Flutter, mobile development, and full-stack
              development. Feel free to reach out — I'd love to connect.
            </p>

            <div className={styles.ctaButtons}>
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                <FiMail aria-hidden="true" /> Send an Email
              </a>
              <a
                href={personal.cvPath}
                download
                className="btn btn-ghost"
                aria-label="Download CV"
              >
                <FiDownload aria-hidden="true" /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants} className={styles.cards}>
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={styles.card}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={`${link.label}: ${link.value}`}
              >
                <span className={styles.cardIcon}>{link.icon}</span>
                <div className={styles.cardText}>
                  <span className={styles.cardLabel}>{link.label}</span>
                  <span className={styles.cardValue}>{link.value}</span>
                </div>
                <span className={styles.cardArrow} aria-hidden="true">→</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
