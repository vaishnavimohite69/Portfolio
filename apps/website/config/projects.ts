export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL (site, repository, demo, or video). */
  link: string;
  /** Github repository URL. */
  github?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Short one-line description for list view. */
  shortDescription?: string;
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'learn-sphere',
    title: 'Learn Sphere',
    period: {
      start: '01.2025',
    },
    link: '',
    github: '',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
    shortDescription:
      'An e-learning platform for browsing courses, tracking progress, and managing learners.',
    isExpanded: true,
  },
  {
    id: 'intern-joining-form',
    title: 'Intern Joining Form',
    period: {
      start: '01.2025',
    },
    link: '',
    github: '',
    skills: ['React', 'Node.js', 'Express', 'MySQL'],
    shortDescription:
      'A digital onboarding form system for interns, with validation and submission tracking.',
  },
  {
    id: 'beacon-website',
    title: 'Beacon Website',
    period: {
      start: '01.2025',
    },
    link: '',
    github: '',
    skills: ['React', 'Tailwind CSS', 'JavaScript'],
    shortDescription:
      'A responsive marketing website built with a clean, modern UI.',
  },
  {
    id: 'cinematic-hero',
    title: 'Cinematic Hero',
    period: {
      start: '01.2025',
    },
    link: '',
    github: '',
    skills: ['React', 'Vite', 'Tailwind CSS'],
    shortDescription:
      'A movie streaming UI with search, hero banners, and detail modals.',
  },
];
