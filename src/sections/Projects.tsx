import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio';
import { containerVariants, fadeUpVariants } from '../utils/animations';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      variants={fadeUpVariants}
      className={styles.card}
      aria-label={`Project: ${project.name}`}
    >
      <div
        className={styles.cardAccent}
        style={{ background: project.color }}
        aria-hidden="true"
      />

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <span className={styles.projectIcon} aria-hidden="true">{project.icon}</span>
          <div className={styles.projectMeta}>
            <span className={styles.projectType}>{project.type}</span>
            <h3 className={styles.projectName}>{project.name}</h3>
          </div>
        </div>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.techStack} aria-label="Technologies used">
          {project.technologies.map(tech => (
            <span key={tech} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <button
          className={styles.expandBtn}
          onClick={() => setExpanded(prev => !prev)}
          aria-expanded={expanded}
          aria-controls={`features-${project.id}`}
        >
          <span>Key Features</span>
          {expanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              id={`features-${project.id}`}
              className={styles.featureList}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              role="list"
            >
              {project.features.map(f => (
                <li key={f} className={styles.featureItem}>
                  <span
                    className={styles.featureDot}
                    style={{ background: project.color }}
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className={styles.cardLinks}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label={`${project.name} GitHub repository`}
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`${project.name} live demo`}
            >
              <FiExternalLink aria-hidden="true" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className={`section ${styles.projects}`} aria-label="Projects">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            A selection of real projects — from graduation work to personal mobile apps.
          </p>
        </div>

        <motion.div
          ref={ref}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
