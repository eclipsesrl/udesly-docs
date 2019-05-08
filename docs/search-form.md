---
id: search-form
title: Search Form
---

## How to configure Search Form

Users can search for anything anywhere in the site. A new search bar will allow them to filter their search and narrow the results within the site pages, posts and products.

Select the **Search** Element and add the attributes:

> wp=search
>
> el=search-form


You can add the attribute **udesly-data** followed by the post types you want to enable to the research, separated by a comma, to search only in some specific post types.

**E.g.** To search only in Blog posts the search form should have these attributes:

> wp=search
>
> el=search-form
>
> udesly-data=post

**E.g.** To search in Blog posts and in WooCommerce products, the search form should have these attributes:

> wp=search
>
> el=search-form
>
> udesly-data=post, product