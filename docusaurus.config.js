// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubLink = 'https://github.com/dreamsparkx/leetcode';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Leetcode',
  tagline: 'Leetcode Solutions',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/leetcode',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dreamsparkx', // Usually your GitHub org/user name.
  projectName: 'leetcode', // Usually your repo name.
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"), {
        indexDocs: true,
        indexBlog: false,
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "solutions",
          routeBasePath: "solutions",
          sidebarPath: require.resolve('./solutions/sidebar.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'dreamsparkx',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Solutions',
          },
          {
            href: githubLink,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Solutions',
                to: '/solutions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: githubLink,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
