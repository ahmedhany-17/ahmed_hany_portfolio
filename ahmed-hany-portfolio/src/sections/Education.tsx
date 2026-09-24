import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiBookOpen } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { education } from '../data/portfolio';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="education" className={`section ${styles.education}`} aria-label="Education">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <motion.div
          ref={ref}
          className={styles.cards}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {education.map(edu => (
            <article key={edu.id} className={styles.card} aria-label={`${edu.degree} — ${edu.institution}`}>
              <div className={styles.cardLeft}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <FiBookOpen />
                </div>
              </div>

              <div className={styles.cardRight}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>
                </div>

                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <FiCalendar aria-hidden="true" />
                    <time>{edu.period}</time>
                  </span>
                  <span className={styles.metaItem}>
                    <FiMapPin aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>

                <div className={styles.relevantCourses}>
                  <p className={styles.coursesLabel}>Relevant Areas</p>
                  <div className={styles.coursesList}>
                    {[
                      'Information Systems',
                      'Database Management',
                      'System Analysis & Design',
                      'Software Engineering',
                      'Business Intelligence',
                      'Computer Networks',
                    ].map(c => (
                      <span key={c} className={styles.courseBadge}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
