export type CoreValue = {
  title: string;
  description: string;
  /** Placeholder icons — swap with final assets under /site/icons/ if needed */
  iconSrc: string;
};

/** Placeholder copy — edit to match your real principles. */
export const coreValues: CoreValue[] = [
  {
    title: 'Honest tradeoffs',
    description:
      'Tools should say what they do and what they skip — especially when bytes, quality, or format choices matter.',
    iconSrc: '/site/icons/honest.svg',
  },
  {
    title: 'Scripture-first focus',
    description:
      'Harvous exists to support serious Bible study without treating the text as an afterthought.',
    iconSrc: '/site/icons/scripture.svg',
  },
  {
    title: 'On-device by default',
    description:
      'Prefer local processing where it keeps your files yours and your workflow fast.',
    iconSrc: '/site/icons/device.svg',
  },
  {
    title: 'Open source when it helps',
    description:
      'Ship code you can inspect, fork, and trust — starting with projects like Dinky.',
    iconSrc: '/site/icons/opensource.svg',
  },
  {
    title: 'Respect for attention',
    description:
      'Fewer modal walls, clearer defaults, and interfaces that get out of the way.',
    iconSrc: '/site/icons/calm.svg',
  },
  {
    title: 'Plain language',
    description:
      'Explain compression, sorting, and study features in words normal humans use.',
    iconSrc: '/site/icons/plain.svg',
  },
  {
    title: 'Built to last',
    description:
      'Favor maintainable choices over novelty so updates stay small and dependable.',
    iconSrc: '/site/icons/durable.svg',
  },
  {
    title: 'Accessible by habit',
    description:
      'Keyboard paths, legible type, and semantics that do not require perfect vision or motor control.',
    iconSrc: '/site/icons/access.svg',
  },
];
