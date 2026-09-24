import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolio';
import { containerVariants, slideLeftVariants } from '../utils/animations';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className={`section ${styles.experience}`} aria-label="Work experience">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work &amp; Internships</h2>
          <p className="section-subtitle">
            Practical experience gained through internships across tech, banking, and energy sectors.
          </p>
        </div>

        <motion.div
          ref={ref}
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          role="list"
        >
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              variants={slideLeftVariants}
              className={styles.item}
              role="listitem"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              <div className={styles.timelineSide} aria-hidden="true">
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.period}>
                    <time>{exp.period}</time>
                  </span>
                </div>

                <ul className={styles.descList} role="list">
                  {exp.description.map((point, j) => (
                    <li key={j} className={styles.descItem}>
                      <span className={styles.descDot} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
