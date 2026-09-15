import React from 'react';

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
};

const stroke = {
  ...base,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const InstagramIcon = (props) => (
  <svg {...stroke} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const FacebookIcon = (props) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...stroke} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PlayIcon = (props) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
  </svg>
);

export const ArrowIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...stroke} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
