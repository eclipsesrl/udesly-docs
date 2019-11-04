/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const config = require('dotenv').config()

const {parsed: {ALGOLIA_API_KEY, ALGOLIA_INDEX}} = config; 

const siteConfig = {
  title: 'Udesly', // Title for your website.
  tagline: 'Udesly Documentation',
  url: 'https://docs.udesly.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  
  // Used for publishing and more
  projectName: 'udesly',
  organizationName: '',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  algolia: {
    apiKey: ALGOLIA_API_KEY,
    indexName: ALGOLIA_INDEX,
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://www.udesly.com/', label: 'Home'},
    {doc: 'wordpress-setup', label: 'WordPress'},
    {doc: 'shopify-setup', label: 'Shopify'},
    {doc: 'ghost-overview', label: 'Ghost'},
    {search: true}
  ],

  /* path to images for header/footer */
  headerIcon: '',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#6f39f8',
    secondaryColor: '#0d0d0d',
  },

  docsUrl: '',

  fonts: {
    myFont: [
      "mr-eaves-xl-modern",
      "Sans Serif"
    ],
    myOtherFont: [
      "mr-eaves-xl-modern",
      "Sans Serif"
    ]
  },
  docsSideNavCollapsible: true,
  
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Leckerli+One",
    "https://use.typekit.net/kyq6xoo.css"
  ],

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Eclipse SRL | All rights reserved`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [''],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/udesly.jpg',
  twitterImage: 'img/udesly.jpg',

  scrollToTop: true,
  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
