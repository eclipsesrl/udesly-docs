---
id: version-1.7.0-wordpress-pages-configuration
title: Pages Configuration
original_id: wordpress-pages-configuration
---

Here is the list of the page types you can assign to each page of your Webflow project:

## WordPress Pages
- **Home** (this is the home page of your website, usually index.html);
- **Standard Template** (pre-styled template used as default template to create other pages);
- **Generic** (this is the WordPress single page that is used for example to create typical "About us" or "Contact us" page)
- **Template** (pre-styled page that can be chosen to create other pages directly from WordPress).
‍
## Blog Pages

- **Single Post** (the page that shows the single post of your WordPress blog);
- **Blog Archive** (the page where all your blog posts will be visible, it must have the element Blog Archive or Masonry Blog Archive inside);
- **Template for single post** (pre-styled page that can be chosen to style a post of your blog differently;
- **Specific Tag Page** (used to style a specific tag archive page of your blog. *The page must be named as the slug of the tag*);
- **Specific Category Page** (used to style a specific category archive page of your blog. *The page must be named as the slug of the category*);

## Search Pages
- **Search Results** (page used to show the search results of a specific query, it must have the element Search Results inside).
‍
## WooCommerce Pages
- **Shop** (this is the Shop page in which you can manage all the products included in your storage);
- **Single Product** (this page illustrates the card of the single product and all its specifications);
- **Category** (Used to style a specific category archive page of your shop, the page must be named as the slug of the category);
- **Tag** (Used to style a specific tag archive page of your shop, the page must be named as the slug of the tag);
- **Single Product Template** (pre-styled page that can be choosen to style a product of your shop differently);
- **Search Results** (page used to show the search results of a specific query within WooCommerce, it must contain the element “Search Results”).

## Easy Digital Downloads Pages
- **Downloads Archive** (this is the page where all your EDD downloads will be visible, it must have the Downloads element inside);
- **Single EDD Download** (the page showing the single EDD Download);
- **Template for Single EDD Download** (choose your own template to stylize some EDD Downloads differently, from WordPress directly);
- **Specific EDD Download Category** (used to style an EDD specific category archive page, the page must be named as the slug of the category);
- **Specific EDD Download Tag** (used to style an EDD specific tag archive page, the page must be named as the slug of the category );
- **EDD Search Results** (page used to show the search results of a specific query, it must contain the element "Search Results").

## Utility Pages
- **Utility** (page used to create the typical server error pages, for example 404-Not found);
- **Maintenance** (it is a temporary placeholder to use when a site needs to be offline for updates, backups or maintenance);
- **Do not convert** (the selected page won't be converted. This prevents the presence of the page in the generated theme, usually used for some automatically generated Webflow pages).
‍
## Custom Post Type Pages
- **Archive for Custom post Type** (custom post type are content types like posts and pages. This is the page where all your Custom Post Type posts will be visible. It must have the element Archive Posts inside. *The page must be named "archive-the name of your custom post type slug"*);
- **Single Custom Post Type page** (this is the page that shows your Custom Post Type single post. *The page must be named "detail_the name of your custom post type slug"*);
- **Template for Custom Post Type** (this is a pre-styled page that can be chosen to style a post of your custom post type differently. *The page must be named "template-the name of your custom post type slug"*).



