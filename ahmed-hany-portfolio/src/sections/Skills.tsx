import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolio';
import { tightStagger, fadeUpVariants } from '../utils/animations';
import styles from './Skills.module.css';

const skillIconMap: Record<string, string> = {
  Dart: '🎯',
  'C++': '⚙️',
  SQL: '🗄️',
  Flutter: '📱',
  Firebase: '🔥',
  HTML: '🌐',
  CSS: '🎨',
  JavaScript: '⚡',
  PHP: '🐘',
  'RESTful APIs': '🔗',
  'SQL Server': '🗄️',
  'Firebase Firestore': '🔥',
  'Power BI': '📊',
  'Use Case Diagram': '📋',
  ERD: '🔀',
  DFD: '🌊',
  'Activity Diagram': '🔄',
  'Sequence Diagram': '📜',
  'Class Diagram': '📐',
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className={`section ${styles.skills}`} aria-label="Skills">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with across mobile, web, databases, and system design.
          </p>
        </div>

        <motion.div
          ref={ref}
          className={styles.categories}
          variants={tightStagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map(cat => (
            <motion.div key={cat.category} variants={fadeUpVariants} className={styles.category}>
              <h3 className={styles.categoryTitle}>{cat.category}</h3>
              <div className={styles.skillGrid}>
                {cat.skills.map(skill => (
                  <div key={skill.name} className={styles.skillChip} title={skill.name}>
                    <span className={styles.skillIcon} aria-hidden="true">
                      {skillIconMap[skill.name] ?? '•'}
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
