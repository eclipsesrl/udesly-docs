---
id: wordpress-search-misc
title: Search Misc Elements
---

## Search Form
This element can be entered wherever you prefer within your Webflow project.

No attribute is necessary because the Search Form is automatically converted. 

You can use an optional attribute if you want to query specific post types. 
Insert a **Search** item and add the attribute:

> post-type={list of post types separated by comma}

**E.g:** 
> post-type=post,product

To search between posts and WooCommerce products exclusively. 

If you don't define this attribute, it will search everywhere.