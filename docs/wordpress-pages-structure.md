---
id: wordpress-pages-structure
title: Pages Structure
---

In order to have a Webflow template ready to be converted to a WordPress one, Adapter must understand what kind of pages you created in your Template.
You can define the type of page you created using a combination of the attributes below. 

 > page={page-type}

 > post-type={post-type}

 > specific={slug or id}



## WordPress Pages Hierarchy

WordPress uses a clear defined hierarchy to decide wich template should be used to display a page you are visiting. We can easily classify pages of the template based on 3 main features:

 1. **Page Type**: each page you create as a *type* that defines it's use between WordPress, like *archive*, *single*, *search*, *template*, *taxonomy*;
 2. **Post Type**: WordPress works with different types of content. These content types are normally described as Post Types, which may be a little confusing since it refers to all different types of content in WordPress. For example, a post is a specific Post Type, and so is a page.
 3. **Specificity**: A page can be *generic* (it's used to display different *object* of the same type) or be *specific* (it's used to display one *object*). For example a *single post page* it's a generic page that it's used to display several posts of your blog, a *specific post page* it's used to display only one specific post of your blog.

## Page Types
So, to help it, you have to add some custom attributes to the Body element of your Webflow page.

There are 3 types of attributes you can enter on the body of your pages:

> **page** --> It defines the page type
>
> **post-type** --> It defines the type of the page object
>
> **specific** --> To be used only in specific cases.

Static Webflow pages do not need attributes because. The same applies to Index, Search and 404 pages: they are automatic and no attribute is necessary.

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
> post-type=tag
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
