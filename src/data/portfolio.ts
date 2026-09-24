// ============================================================
// PORTFOLIO DATA — Single source of truth
// All content is derived from Ahmed Hany's CV.
// ============================================================

export const personal = {
  name: 'Ahmed Hany',
  title: 'Flutter Developer & Full-Stack Developer',
  subtitle: 'MIS Graduate',
  email: 'ahmedhanyelsayede@gmail.com',
  linkedin: 'https://linkedin.com/in/ahmed-hany-dev',
  github: 'https://github.com/ahmedhany-17',
  cvPath: `${import.meta.env.BASE_URL}Ahmed-Hany-CV.pdf`,
  summary:
    'I build cross-platform mobile applications and full-stack web solutions with a focus on clean architecture, Firebase, APIs, databases, and practical user experiences.',
  about: [
    "I'm an MIS undergraduate at the Egyptian Russian University, currently in my final year, with hands-on experience in Flutter mobile development and full-stack web development gained through internships and independent projects.",
    'My background covers Flutter & Dart, Firebase, backend development with PHP and RESTful APIs, relational databases with SQL Server, and system analysis. I enjoy working on real products — from designing the database schema to shipping a working mobile app.',
    "I'm currently open to junior opportunities in Flutter development, mobile development, and full-stack development, where I can keep growing and contribute to a real team.",
  ],
};

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Dart' },
      { name: 'C++' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Mobile & Web Development',
    skills: [
      { name: 'Flutter' },
      { name: 'Firebase' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'RESTful APIs' },
    ],
  },
  {
    category: 'Databases & Data Analysis',
    skills: [
      { name: 'SQL' },
      { name: 'SQL Server' },
      { name: 'Firebase Firestore' },
      { name: 'Power BI' },
    ],
  },
  {
    category: 'System Analysis',
    skills: [
      { name: 'Use Case Diagram' },
      { name: 'ERD' },
      { name: 'DFD' },
      { name: 'Activity Diagram' },
      { name: 'Sequence Diagram' },
      { name: 'Class Diagram' },
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  color: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'dietify',
    name: 'Dietify',
    type: 'Graduation Project',
    description:
      'A full-stack food ordering system with AI-based meal recommendations and chatbot support.',
    longDescription:
      'Dietify is my graduation project — a cross-platform food ordering system built with Flutter for the mobile frontend and a PHP + SQL Server backend. It includes AI-powered meal recommendations based on dietary preferences and an AI chatbot to assist users through the ordering flow.',
    technologies: ['Flutter', 'Dart', 'PHP', 'SQL Server', 'HTML', 'CSS', 'JavaScript', 'RESTful APIs'],
    features: [
      'Food ordering & menu browsing',
      'AI-based meal recommendations',
      'AI chatbot support',
      'Cross-platform Flutter UI',
      'REST API backend integration',
      'SQL Server database',
      'Full system analysis (Use Case, ERD, DFD, Activity, Sequence, Class Diagram)',
    ],
    github: 'https://github.com/ahmedhany-17',
    color: '#0ea5e9',
    icon: '🍽️',
  },
  {
    id: 'burger-go',
    name: 'Burger Go',
    type: 'Mobile App',
    description:
      'A food ordering mobile application built with Flutter and Firebase, featuring real-time cart and checkout.',
    longDescription:
      'Burger Go is a Flutter-based food ordering app powered by Firebase. It uses Firebase Authentication for secure login, Cloud Firestore for real-time data, and a clean Provider-based state management architecture.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Provider'],
    features: [
      'Firebase Authentication',
      'Cloud Firestore real-time data',
      'Cart management',
      'Checkout flow',
      'Clean Architecture',
      'Provider state management',
    ],
    github: 'https://github.com/ahmedhany-17',
    color: '#f97316',
    icon: '🍔',
  },
  {
    id: 'taskati',
    name: 'Taskati',
    type: 'Mobile App',
    description:
      'A task management app focused on scheduling and organizing daily tasks with dark/light mode.',
    longDescription:
      'Taskati helps users organize their daily tasks with an intuitive Flutter UI. It features local persistence via Shared Preferences, a smart search, smooth animations, and a polished dark/light mode.',
    technologies: ['Flutter', 'Dart', 'Shared Preferences'],
    features: [
      'Task scheduling & organization',
      'Task search',
      'Local storage with Shared Preferences',
      'Responsive UI',
      'Dark / Light mode toggle',
      'Smooth animations',
    ],
    github: 'https://github.com/ahmedhany-17',
    color: '#8b5cf6',
    icon: '✅',
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: 'internship' | 'job';
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: 'kimit',
    role: 'Flutter Developer Intern',
    company: 'Kimit',
    period: 'Mar 2025 – Apr 2025',
    type: 'internship',
    description: [
      'Built mobile app features using Flutter and Firebase.',
      'Worked with Firebase Authentication, real-time databases, and dynamic UI components.',
      'Applied Clean Architecture principles to maintain a scalable codebase.',
    ],
  },
  {
    id: 'osoco',
    role: 'IT Intern',
    company: 'Offshore Shukeir Oil Company (OSOCO)',
    period: 'Jul 2025 – Aug 2025',
    type: 'internship',
    description: [
      'Learned front-end basics and Cisco networking fundamentals.',
      'Worked with Windows Server, Active Directory, and SQL databases.',
      'Participated in system installation and record management tasks.',
    ],
  },
  {
    id: 'cib',
    role: 'Summer Intern',
    company: 'Commercial International Bank (CIB)',
    period: 'Jun 2025 – Jul 2025',
    type: 'internship',
    description: [
      'Completed "The Green Leap" training track focused on sustainability and finance.',
      'Covered ESG principles, Sustainable Finance, and AI applications in banking.',
      'Training delivered in partnership with IFC, Frankfurt School of Finance & Management, SAS, and Euromoney Learning.',
    ],
  },
  {
    id: 'cpc',
    role: 'IT Intern',
    company: 'Cooperation Petroleum Company',
    period: 'Jul 2024 – Aug 2024',
    type: 'internship',
    description: [
      'Explored server environments and basic networking concepts.',
      'Applied database concepts to practical data handling and record-keeping tasks.',
    ],
  },
];

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
}

export const education: Education[] = [
  {
    id: 'eru',
    degree: 'Bachelor of Management Information Systems',
    field: 'MIS',
    institution: 'Egyptian Russian University',
    period: 'Oct 2022 – Jun 2026',
    location: 'Cairo, Egypt',
  },
];
