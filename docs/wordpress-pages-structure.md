---
id: wordpress-pages-structure
title: Pages Structure
---

WordPress works with different types of pages:

> Archive
>
> Single
>
> Template
>
> Taxonomy
>
> Search

With the Adapter 2.0 you define the page type in Webflow through some attributes on body (it's necessary only for CMS pages). 

There are 3 types of attributes you can enter on the body of your pages:

> **page** --> It defines the page type
>
> **post-type** --> It defines the type of the page object
>
> **specific** --> To be used only in specific cases.

Static Webflow pages do not need attributes because they are not going to be converted. The same applies to Index, Search and 404 pages: they are automatic and no attribute is necessary.

CMS pages, instead, must have appropriate attributes entered in the body, otherwise the conversion won't be possible.

Depending on whether we are talking about an archive page, single page, template page or taxonomy page, various scenarios are presented based on the attributes we are going to enter:

## Single Page

If we don't define the page type, this page will show a single post of our blog. If we define the type, it will be the single page of that specific type. 

In this way we can use third party plugins that create Custom Post Types.

## Archive Pages

If we don't define the page type, this page will show our blog. If we define the type, it will be the archive page of that specific type.

Before we go any further, it would be appropriate dwell on some practical example:

#### Example 1
We have an archive page and a single page. They have to be our Blog and Single Post pages respectively. What we have to enter is:

> page=archive

and

> page=single

**We have not defined the type, so they will be our Blog and Single post pages automatically**

#### Example 2
What if we'd like to show WooCommerce archive and single product pages, instead?
Attributes to enter are:

> page=archive
>
> post-type=product

and 

> page=single
>
> post-type=product

**We have defined the type, assuming that these archive and single pages belong to WooCommerce**

**IMPORTANT:** SINGLE PAGES AND ARCHIVE PAGES ARE UNIQUE BY TYPE

## Template Pages
Without the type definition, it will be a page template. It's used to show pages that can be created in WordPress. By defining the type, we want to create a template for that specific post type.

## Taxonomy Pages
These pages involve clusters of some items, such as Categories and Tags. Without defining the post type, it will be the Blog category page by default. 
We can also decide to show specific taxonomies.

#### Example
We want to create a page showing all post types belonging to a specific tag. What we have to enter in the body is.

> page=taxonomy
>
> type=tag
>
> specific=slug/id of that specific tag

## Search Pages
As said above, Search page is automatic and does not need to have any attribute inserted, but if we want to create a search page for a specific post type, we are forced to define the post type itself. 

#### Example
> page=search
>
> post-type=product

## Other Pages
### Temporary Page
If you need to create a mantainance page, it must have this attribute attached on the body:

> page=temporary

### Remove 
Use the following attribute if you don't want a given page to be converted:

> page=remove
