// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Soap Dispencer',
  tagline: 'Fluid Dynamics Group 17',
  url: 'https://hw3579.github.io',
  baseUrl: '/Fluid/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hw3579', // Usually your GitHub org/user name.
  projectName: 'Fluid', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
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
        title: 'Fluid',
        logo: {
          alt: '相得益章项目 Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/introduce',
            position: 'left',
            label: 'Introduction',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website construction',
            items: [
              {
                label: 'Jiaqi Yao',
                href: 'https://github.com/hw3579',
              },
            ],
          },
          {
            title: 'Data collection',
            items: [
              {
                label: 'Ruixin Zhan',
                href: 'https://500px.com.cn/zhanruix07',
              },
              {
                label: 'Xuzhao Zhang',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'Proofreading',
            items: [
              {
                label: 'Ziming Zhou',
                to: '/blog',
              },
              {
                label: 'Brooks',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Acknowledgements',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fluid Dynamics Group 17, Inc.`,//Built with Docusaurus.
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
