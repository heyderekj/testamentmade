/** Heroicons 24×24 solid — same library as dinkyfiles.com `.feature-icon` SVGs */
export const CORE_VALUE_ICONS = [
  'scale',
  'book-open',
  'computer-desktop',
  'code-bracket',
  'moon',
  'chat-bubble-bottom-center-text',
  'shield-check',
  'hand-raised',
] as const;

export type CoreValueIcon = (typeof CORE_VALUE_ICONS)[number];

export type CoreValue = {
  title: string;
  description: string;
  icon: CoreValueIcon;
};

/** Studio-wide principles — tweak anytime. */
export const coreValues: CoreValue[] = [
  {
    title: 'Honest tradeoffs',
    description:
      'Tools should say what they do and what they skip — especially when quality, size, speed, or safety are on the line.',
    icon: 'scale',
  },
  {
    title: 'Depth over noise',
    description:
      'We build for careful work—reading, creating, organizing—not for endless distraction or dark patterns.',
    icon: 'book-open',
  },
  {
    title: 'On-device by default',
    description:
      'Prefer local processing when it keeps your files yours, your machine fast, and your choices transparent.',
    icon: 'computer-desktop',
  },
  {
    title: 'Open source when it helps',
    description:
      'Ship code you can inspect, fork, and trust whenever openness is the right trade for users and the ecosystem.',
    icon: 'code-bracket',
  },
  {
    title: 'Respect for attention',
    description:
      'Fewer modal walls, clearer defaults, and interfaces that step aside once you know what you want.',
    icon: 'moon',
  },
  {
    title: 'Plain language',
    description:
      'Explain what features do and what happens next in plain words—not vendor jargon or fine print.',
    icon: 'chat-bubble-bottom-center-text',
  },
  {
    title: 'Built to last',
    description:
      'Favor maintainable choices over novelty so updates stay small, predictable, and worth installing.',
    icon: 'shield-check',
  },
  {
    title: 'Accessible by habit',
    description:
      'Keyboard paths, legible type, and semantics that still work when vision, motion, or patience varies.',
    icon: 'hand-raised',
  },
];
