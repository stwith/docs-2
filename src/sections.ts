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
  // - web-ui-kit
  {
    name: 'Web Components',
    docId: 'ui-kit',
    icon: HTMLIcon,
    section: 'web-ui-kit',
  },

  // - web-core-sdk
  {
    name: 'JavaScript',
    docId: 'web-core',
    icon: JSIcon,
    section: 'web-core-sdk',
  },
  // Mobile SDKs
  {
    name: 'Android Core',
    docId: 'android-core',
    icon: AndroidIcon,
    section: 'mobile-core',
  },

  {
    name: 'iOS Core',
    docId: 'ios-core',
    icon: AppleIcon,
    section: 'mobile-core',
  },

  {
    name: 'React Native Core',
    docId: 'rn-core',
    icon: ReactIcon,
    section: 'mobile-core',
  },
  {
    name: 'Flutter Core',
    docId: 'flutter-core',
    icon: FlutterIcon,
    section: 'mobile-core',
  },
  {
    name: 'React Native',
    docId: 'react-native',
    icon: ReactIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Android',
    docId: 'android',
    icon: AndroidIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'iOS',
    docId: 'ios',
    icon: AppleIcon,
    section: 'mobile-sdk',
  },
  {
    name: 'Flutter',
    docId: 'flutter',
    icon: FlutterIcon,
    section: 'mobile-sdk',
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
