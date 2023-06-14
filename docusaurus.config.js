const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'Dyte Docs',
  tagline: 'Real-time audio & video SDKs, ready to launch 🚀',
  url: 'https://docs.dyte.io',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'plugin-sdk',
    path: 'docs/plugin-sdk',
    routeBasePath: '/plugin-sdk',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Web Core
  {
    id: 'web-core',
    path: 'docs/web-core',
    routeBasePath: '/web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Custom Auth SDK
  {
    id: 'ca-web',
    path: 'docs/custom-auth/web',
    routeBasePath: '/custom-auth/web',
    versions: {
      current: {
        label: '0.11.x',
      },
    },
  },

  {
    id: 'ca-android',
    path: 'docs/custom-auth/android',
    routeBasePath: '/custom-auth/android',
    versions: {
      current: {
        label: '0.12.x',
      },
    },
  },

  // Custom Auth Wallet Connector
  {
    id: 'ca-rainbowkit',
    path: 'docs/custom-auth/rainbowkit',
    routeBasePath: '/custom-auth/rainbowkit',
    versions: {
      current: {
        label: '0.13.13',
      },
    },
  },

  // Plug & Play SDK
  {
    id: 'pnp-popup',
    path: 'docs/plug-play/popup',
    routeBasePath: '/plug-play/popup',
    versions: {
      current: {
        label: '1.01.01',
      },
    },
  },

  {
    id: 'pnp-android',
    path: 'docs/plug-play/android',
    routeBasePath: '/plug-play/android',
    versions: {
      current: {
        label: '1.02.02',
      },
    },
  },

  // Plug & Play Wallet Connector
  {
    id: 'pnp-wagmi',
    path: 'docs/plug-play/wagmi',
    routeBasePath: '/plug-play/wagmi',
    versions: {
      current: {
        label: '1.11.11',
      },
    },
  },

  {
    id: 'pnp-rainbowkit',
    path: 'docs/plug-play/rainbowkit',
    routeBasePath: '/plug-play/rainbowkit',
    versions: {
      current: {
        label: '1.12.12',
      },
    },
  },

];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  editUrl: 'https://github.com/dyte-in/docs/tree/main/',
  showLastUpdateTime: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const isDev = process.env.NODE_ENV === 'development';

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [tailwindPlugin, ...docs_plugins, webpackPlugin];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
// const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/dyte-docs-card.png',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Dyte Docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            label: 'Guides',
            to: 'guides/quickstart',
            position: 'left',
          },
          {
            label: 'SDKs',
            type: 'dropdown',
            position: 'left',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'FAQ',
            to: 'faq',
            position: 'left',
            className: 'new-badge',

          },
          // {
          //   label: 'Resources',
          //   type: 'dropdown',
          //   className: 'dyte-dropdown resources-dropdown',
          //   items: [
          //     {
          //       type: 'html',
          //       value: resourcesHTML,
          //       className: 'dyte-dropdown',
          //     },
          //   ],
          // },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Book a demo',
            href: 'https://dyte.io/schedule-demo',
            position: 'right',
            className: 'navbar-book-demo',
          },
          {
            label: 'Dashboard',
            href: 'https://dashboard.unipass.id',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Dyte Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Demo',
                href: 'https://app.dyte.io',
              },
              {
                label: 'Developer Portal',
                href: 'https://dev.dyte.io',
              },
              {
                label: 'Pricing',
                href: 'https://dyte.io/#pricing',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://dyte.io',
              },
              {
                label: 'Join Us',
                href: 'https://dyte.freshteam.com/jobs',
              },
              {
                label: 'Privacy Policy',
                href: 'https://dyte.io/privacy-policy',
              },
              {
                label: 'Contact Us',
                href: 'https://dyte.io/contact',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: '/',
              },
              {
                label: 'Blog',
                href: 'https://dyte.io/blog',
              },
              {
                label: 'Community',
                href: 'https://community.dyte.io',
              },
            ],
          },
        ],
        copyright: 'Copyright © Dyte since 2020. All rights reserved.',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
