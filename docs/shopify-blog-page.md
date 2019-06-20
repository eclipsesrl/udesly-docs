---
id: shopify-blog-page
title: Blog Page
---

This guide aims to show the use of attributes for the configuration of the blog in Webflow and make it convertible to Shopify through the Udesly Adapter.
Some of these items can be used only in the page set as **blog page** (Blog page must have the following attribute entered on the body):

> page=blog


#### Blog Title

This is the blog title (**e.g:** News) and it can be added on every text element.

The attribute to enter is:

> blog=title


#### Blog Archive Articles

It must be inserted on a Collection List Wrapper and it's the list of archive posts. To enable pagination just add the pagination to the collection and you can control the number of posts from *shopify -> customize theme*

The attribute to enter is:

> blog=archive-posts

tutti gli elementi chepuoi settare nel collection item di questo elemento le trovi qui


#### Blog Tags

This element returns all tags in a blog. Similar to **all_tags** but it only returns tags of articles that are in the filtered view.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> blog=tags


#### Blog All Tags

It returns all tags of all articles of a blog. This includes tags of articles that are not in the current pagination view.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> blog=all-tags


Check all other items you can insert in the Blog page here.