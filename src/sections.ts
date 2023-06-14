import type { ComponentProps, ReactNode } from 'react';
import {
  ReactIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
} from './icons';

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  // Plugin SDKs
  // - web
  {
    name: 'Javascript',
    docId: 'plugin-sdk',
    icon: JSIcon,
    section: 'plugin-sdk',
  },

  // Web SDKs

  // - web-core-sdk
  {
    name: 'JavaScript',
    docId: 'web-core',
    icon: JSIcon,
    section: 'web-core-sdk',
  },

  // Custom Auth SDK
  {
    name: 'Web',
    docId: 'ca-web',
    icon: AndroidIcon,
    section: 'ca-sdk',
  },

  {
    name: 'Android',
    docId: 'ca-android',
    icon: AppleIcon,
    section: 'ca-sdk',
  },

  // Custom Auth Wallet Connector
  {
    name: 'Rainbow Kit',
    docId: 'ca-rainbowkit',
    icon: AndroidIcon,
    section: 'ca-wc',
  },

  // Plug & Play SDK
  {
    name: 'Web - Popup',
    docId: 'pnp-popup',
    icon: AndroidIcon,
    section: 'pnp-sdk',
  },

  {
    name: 'Android',
    docId: 'pnp-android',
    icon: AppleIcon,
    section: 'pnp-sdk',
  },

    // Plug & Play Wallet Connector
    {
      name: 'Wagmi',
      docId: 'pnp-wagmi',
      icon: AndroidIcon,
      section: 'pnp-wc',
    },
  
    {
      name: 'Rianbow Kit',
      docId: 'pnp-rainbowkit',
      icon: AppleIcon,
      section: 'pnp-wc',
    },

];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'Custom Auth SDK',
      section: 'ca-sdk',
      className: 'new-badge',
      description:
        'Try custom auth sdk.',
    },
    {
      name: 'Wallet Connector',
      section: 'ca-wc',
      description: 'Try custom auth wallet connector.',
    },
  ],
  [
    {
      name: 'Plug & Play SDK',
      section: 'pnp-sdk',
      description: 'Try plug & play wallet sdk.',
    },
    {
      name: 'Wallet Connector',
      section: 'pnp-wc',
      description: 'Try plug & play wallet connector.',
    },
  ],
  [
    {
      name: 'Plugin SDK for Web',
      section: 'plugin-sdk',
      description: 'Build real-time collaborative apps using Dyte.',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
