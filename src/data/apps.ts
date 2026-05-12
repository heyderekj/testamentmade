export type AppEntry = {
  slug: 'harvous' | 'dinky' | 'binky';
  title: string;
  /** Short line under the title (tags row) */
  tags: string[];
  href: string;
  iconSrc: string;
  /** Shown bottom-right on the card */
  linkLabel: string;
  /** Optional “More” line inside the card (App Store–friendly context) */
  description?: string;
  /** If set, footer can list privacy link (future) */
  privacyHref?: string;
};

export const apps: AppEntry[] = [
  {
    slug: 'harvous',
    title: 'Harvous',
    tags: ['Web', 'Bible study'],
    description:
      'Notes-first Bible study — save, organize, and find what mattered again.',
    href: 'https://harvous.com/',
    iconSrc: '/icons/harvous.png',
    linkLabel: 'harvous.com',
  },
  {
    slug: 'dinky',
    title: 'Dinky',
    tags: ['macOS', 'Utilities'],
    description: 'Shrink images, videos, and PDFs — drag, compress, done.',
    href: 'https://dinkyfiles.com/',
    iconSrc: '/icons/dinky.png',
    linkLabel: 'dinkyfiles.com',
  },
  {
    slug: 'binky',
    title: 'Binky',
    tags: ['macOS', 'Productivity'],
    description: 'Sorts your Downloads into sensible folders — nothing gets lost.',
    href: 'https://binkyfiles.com/',
    iconSrc: '/icons/binky.png',
    linkLabel: 'binkyfiles.com',
  },
];
