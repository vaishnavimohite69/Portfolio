import { type Experience, experiences } from './experience';

export type User = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  location: string;
  domain: string;
  website?: string;
  description: string;
  jobTitle: string;
  twitterHandle: string;
  namePronunciationUrl: string;
  username: string;
  tagline: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    bluesky: string;
  };
  image: {
    profile: string;
  };
  flipSentences: string[];
  experiences?: Experience[];
};

const USER: User = {
  firstName: 'Vaishnavi',
  lastName: 'Mohite',
  name: 'Vaishnavi Mohite',
  email: 'vaishnavismohite75@gmail.com',
  domain: 'vaishnavimohite.vercel.app',
  jobTitle: 'Full-Stack Developer',
  username: 'vaishnavimohite69',
  tagline: 'Vaishnavi Mohite — Full-Stack Developer',
  twitterHandle: '',
  location: 'Nagpur, India',
  description:
    'Notes on building full-stack products, from backend architecture to polished frontend experiences.',
  namePronunciationUrl: '',
  social: {
    twitter: '',
    github: 'https://github.com/vaishnavimohite69',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-mohite-530928370/',
    bluesky: '',
  },
  flipSentences: [
    'Building full-stack products end to end.',
    'Frontend interfaces & backend systems.',
    'Clean code, done thoughtfully.',
    'Building with intention.',
    'A full-stack developer.',
  ],
  image: {
    profile: 'https://github.com/vaishnavimohite69.png',
  },
  experiences: experiences,
};

USER.website = `https://${USER.domain}`;

export { USER };
