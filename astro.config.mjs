// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// NOTE: `site` and `base` are tuned for GitHub Pages project pages.
// If you deploy to a custom domain (e.g. docs.bluedotseconomy.org), set
// `site` to that domain and remove `base` (or set it to '/').
export default defineConfig({
  site: 'https://blue-dots-economy.github.io',
  base: '/bluedots-docs',

  integrations: [
    starlight({
      title: 'Documentation',
      description:
        'Open documentation for the Blue Dots Economy — the Signals and Aggregator Digital Public Goods (DPGs) that power local discovery.',
      tagline: 'Discovery infrastructure for India’s districts',
      logo: {
        light: './src/assets/logo-light.png',
        dark: './src/assets/logo-dark.png',
        replacesTitle: false,
        alt: 'Blue Dots Economy',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Blue-Dots-Economy',
        },
        {
          icon: 'external',
          label: 'bluedotseconomy.org',
          href: 'https://bluedotseconomy.org',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/Blue-Dots-Economy/bluedots-docs/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Overview',
          items: [
            { label: 'Introduction', slug: 'overview/introduction' },
            { label: 'The Paradox of Proximity', slug: 'overview/paradox-of-proximity' },
            { label: 'The Blue Dots Approach', slug: 'overview/the-blue-dots-approach' },
            { label: 'Blue Dots as a DPG', slug: 'overview/blue-dots-as-a-dpg' },
            { label: 'Who Is This For', slug: 'overview/who-is-this-for' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Overview', slug: 'core-concepts' },
            { label: 'Signals (Blue Dots)', slug: 'core-concepts/signals' },
            { label: 'Aggregators', slug: 'core-concepts/aggregators' },
            { label: 'Networks, Domains & Instances', slug: 'core-concepts/networks-domains-instances' },
            { label: 'Items, Actions & Events', slug: 'core-concepts/items-actions-events' },
            { label: 'Glossary', slug: 'core-concepts/glossary' },
            {
              label: 'Architecture',
              items: [
                { label: 'High-Level Architecture', slug: 'core-concepts/architecture/high-level-architecture' },
                { label: 'Signals DPG', slug: 'core-concepts/architecture/signals-dpg' },
                { label: 'Aggregator DPG', slug: 'core-concepts/architecture/aggregator-dpg' },
                { label: 'Data Model', slug: 'core-concepts/architecture/data-model' },
                { label: 'Identity & Auth', slug: 'core-concepts/architecture/identity-and-auth' },
              ],
            },
            {
              label: 'Technical Documentation',
              items: [
                { label: 'Overview', slug: 'core-concepts/technical/overview' },
                { label: 'Schema-Driven Model', slug: 'core-concepts/technical/schema-driven-model' },
                { label: 'Read & Write Paths', slug: 'core-concepts/technical/read-write-paths' },
                { label: 'Tech Stack', slug: 'core-concepts/technical/tech-stack' },
              ],
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Overview', slug: 'guides' },
            {
              label: 'Installation',
              items: [
                { label: 'Prerequisites', slug: 'guides/installation/prerequisites' },
                { label: 'Local Stack (Docker)', slug: 'guides/installation/local-stack' },
                { label: 'Signals DPG Setup', slug: 'guides/installation/signals-dpg' },
                { label: 'Aggregator DPG Setup', slug: 'guides/installation/aggregator-dpg' },
              ],
            },
            { label: 'Activating in a District', slug: 'guides/district-activation' },
            { label: 'Adaptor Onboarding', slug: 'guides/adaptor-onboarding' },
            { label: 'Configuration', slug: 'guides/configuration' },
            { label: 'API Reference', slug: 'guides/api-reference' },
            { label: 'Deployment', slug: 'guides/deployment' },
          ],
        },
        {
          label: 'Explore',
          items: [
            { label: 'Use Cases', slug: 'explore/use-cases' },
            { label: 'Pilots: Ghaziabad & Dharwad', slug: 'explore/pilots' },
            { label: 'The Economics of Local Discovery', slug: 'explore/economics' },
            { label: 'The Dots Family', slug: 'explore/beyond-livelihoods' },
          ],
        },
        {
          label: 'Community',
          items: [
            { label: 'Contributing', slug: 'community/contributing' },
            { label: 'Roadmap', slug: 'community/roadmap' },
            { label: 'Release Notes', slug: 'community/release-notes' },
          ],
        },
      ],
    }),
  ],
});
