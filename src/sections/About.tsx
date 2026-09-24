import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personal } from '../data/portfolio';
import { containerVariants, fadeUpVariants } from '../utils/animations';
import styles from './About.module.css';

const highlights = [
  { label: 'Flutter & Dart', icon: '📱' },
  { label: 'Firebase', icon: '🔥' },
  { label: 'Full-Stack Dev', icon: '💻' },
  { label: 'SQL / Databases', icon: '🗄️' },
  { label: 'System Analysis', icon: '📐' },
  { label: 'Power BI', icon: '📊' },
];

const About: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className={`section ${styles.about}`} aria-label="About me">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={styles.grid}
        >
          {/* Left — text */}
          <div className={styles.textColumn}>
            <motion.div variants={fadeUpVariants}>
              <span className="section-label">About Me</span>
              <h2 className="section-title">Who I am</h2>
            </motion.div>

            {personal.about.map((para, i) => (
              <motion.p key={i} variants={fadeUpVariants} className={styles.paragraph}>
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeUpVariants} className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Degree</span>
                <span className={styles.infoValue}>BSc. MIS — Egyptian Russian University</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Cairo, Egypt</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status</span>
                <span className={`${styles.infoValue} ${styles.statusOpen}`}>
                  Open to opportunities
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — highlights */}
          <motion.div variants={fadeUpVariants} className={styles.highlightsColumn}>
            <p className={styles.highlightsTitle}>Core Areas</p>
            <div className={styles.highlightsGrid}>
              {highlights.map(h => (
                <div key={h.label} className={styles.highlightCard}>
                  <span className={styles.highlightIcon} aria-hidden="true">{h.icon}</span>
                  <span className={styles.highlightLabel}>{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
