export type AppEntry = {
  slug: 'harvous' | 'heresmychurch' | 'revisemy' | 'koati' | 'dinky' | 'binky';
  title: string;
  /** Platform and category, joined with " · " on the card */
  tags: string[];
  /** The app's own one-liner, in its own voice */
  tagline: string;
  /** Longer line for meta and screen readers */
  description: string;
  /** Bullet list shown when the card is opened */
  details: string[];
  /** Where the card goes. Absent for an app that isn't open yet. */
  href?: string;
  iconSrc: string;
  /** Shown at the foot of the card */
  linkLabel?: string;
  /** Not open yet: the card shows a “Coming soon” badge and links nowhere. */
  soon?: boolean;
  /** GitHub `owner/name`; the homepage lists the most recently committed-to apps first. */
  repo?: string;
  /** If set, footer can list privacy link (future) */
  privacyHref?: string;
};

export const apps: AppEntry[] = [
  {
    slug: 'harvous',
    repo: 'harvouscom/harvous',
    title: 'Harvous',
    tags: ['Web', 'Bible study'],
    tagline: 'A study Bible that remembers.',
    description:
      'A quiet notes app for studying the Bible, made by one person. Save, organize, and find what mattered again.',
    href: 'https://harvous.com/',
    details: [
      'Save notes, scripture and highlights in one place',
      'Organize them into folders and threads',
      'Find what mattered again, fast',
      'Day and Night themes',
    ],
    iconSrc: '/icons/harvous.png',
    linkLabel: 'harvous.com',
  },
  {
    slug: 'heresmychurch',
    repo: 'harvouscom/heresmychurch',
    title: 'Here’s My Church',
    tags: ['Web', 'Church finder'],
    tagline: 'Find your church, or a new one.',
    description:
      'An interactive map of Christian churches worldwide. Free, open-source, crowd-sourced, no account needed.',
    href: 'https://heresmychurch.com/',
    details: [
      'Browse churches on an interactive map',
      'Filter by denomination, size and language',
      'Service times, address and ministries',
      'Add a church or suggest an edit, no account needed',
    ],
    iconSrc: '/icons/heresmychurch.png',
    linkLabel: 'heresmychurch.com',
  },
  {
    slug: 'revisemy',
    repo: 'heyderekj/revisemy',
    title: 'ReviseMy',
    tags: ['Web', 'Design review'],
    tagline: 'Mark feedback for your agent.',
    description:
      'Your agent sends you a review of its work. You mark what matters; it reads your marks and keeps going.',
    href: 'https://revisemy.com/',
    details: [
      'Your agent captures a page, screenshot, PDF or email',
      'You mark what matters, then approve or ask for changes',
      'Works with Claude, ChatGPT, Copilot, Cursor and Grok',
      'Open source',
    ],
    iconSrc: '/icons/revisemy.png',
    linkLabel: 'revisemy.com',
  },
  {
    slug: 'koati',
    repo: 'heyderekj/koati',
    title: 'Koati',
    tags: ['Web', 'Marketing teams'],
    tagline: 'The inbox for work to be done.',
    description:
      'Requests from sales, product and the agencies you hire land in one place. You agree what to do, and whoever asked can see where it stands.',
    details: [
      'Requests from sales, product and agencies land in one place',
      'Agree on the work before it starts',
      'Whoever asked can see where it stands',
      'Hands tasks to the tools your team already uses',
    ],
    iconSrc: '/icons/koati.png',
    soon: true,
  },
  {
    slug: 'dinky',
    repo: 'heyderekj/dinky',
    title: 'Dinky',
    tags: ['macOS', 'Utilities'],
    tagline: 'Dinky makes files smaller.',
    description: 'Shrink images, videos, and PDFs — drag, compress, done. Free and open source.',
    href: 'https://dinkyfiles.com/',
    details: [
      'Images, videos, audio and PDFs',
      'Drag, compress, done',
      'About 35 MB, for Apple Silicon',
      'Free and open source',
    ],
    iconSrc: '/icons/dinky.png',
    linkLabel: 'dinkyfiles.com',
  },
  {
    slug: 'binky',
    repo: 'heyderekj/binky',
    title: 'Binky',
    tags: ['macOS', 'Productivity'],
    tagline: 'Binky sorts your files.',
    description: 'Sorts your Downloads into sensible folders — nothing gets lost.',
    href: 'https://binkyfiles.com/',
    details: [
      'Quick Sort tidies Downloads in one tap',
      'Routines keep watching with your own rules',
      'Unknown files wait in Review, so nothing is lost',
      'No cloud, open source',
    ],
    iconSrc: '/icons/binky.png',
    linkLabel: 'binkyfiles.com',
  },
];
