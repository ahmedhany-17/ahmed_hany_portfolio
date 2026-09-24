import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { personal } from '../data/portfolio';
import { heroContainer, heroItemVariants } from '../utils/animations';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      {/* Background grid */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* Ambient glow blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.content}
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting badge */}
          <motion.div variants={heroItemVariants} className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Available for junior opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={heroItemVariants} className={styles.name}>
            Hi, I'm{' '}
            <span className={styles.nameAccent}>Ahmed Hany</span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={heroItemVariants} className={styles.title}>
            <span className={styles.titleRole}>Flutter Developer</span>
            <span className={styles.titleDivider} aria-hidden="true">&amp;</span>
            <span className={styles.titleRole}>Full-Stack Developer</span>
          </motion.p>

          {/* Summary */}
          <motion.p variants={heroItemVariants} className={styles.summary}>
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroItemVariants} className={styles.ctas}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={e => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Projects
            </a>
            <a
              href={personal.cvPath}
              download
              className="btn btn-ghost"
              aria-label="Download CV"
            >
              <FiDownload aria-hidden="true" /> Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={heroItemVariants} className={styles.socials}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub profile"
            >
              <FiGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn profile"
            >
              <FiLinkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={heroItemVariants} className={styles.techPills} aria-label="Core technologies">
            {['Flutter', 'Dart', 'Firebase', 'PHP', 'SQL Server', 'REST APIs'].map(tech => (
              <span key={tech} className={styles.pill}>{tech}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <FiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
