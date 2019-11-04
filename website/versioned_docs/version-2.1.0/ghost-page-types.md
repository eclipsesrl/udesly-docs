---
id: version-2.1.0-ghost-page-types
title: Page Types
original_id: ghost-page-types
---

In order to have a Webflow template ready to be converted to a Ghost one, Adapter must understand what kind of pages you created in your Template.
WordPress usage needs the understanding of his template structure. You can find a review below.

<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>

You can define the type of page you need using the attribute below attached to the body of the Webflow page. 

 > page={page-type}

 
Don't worry, it's not necessary for all pages, and you can find below a cheatsheet with all the most used pages and the respective attributes. Almost all pages are automatically recognized and only CMS pages needs attributes to be inserted manually. 

## Default & Template Pages

You can create pages in Webflow that will be used in Ghost to create new pages.

To define a page as Default page add the following attribute on the Body element:

> page=default

To define a page as Template page add the following attribute on the Body element:

> page=template

You need to select the appropriate template from the template selector, otherwise it will act as a generic Default page.

### Single Post Page

This page is used to display a single post of your Blog. Add the following attribute to the Body:

> page=post

### List Page

This page is used for the Blog Page in order to show all the posts of your Blog. Add the following attribute to the Body:

> page=list 

### Specific Single Post Page

This page will be used instead of the Single Post Page when surfing a specific post of your Blog. The name of this page must match with the slug of the post.
To create a specific post page just add the attributes on the Body element of your page

> page=specific-post

### Tag Page

If this page is present in your Webflow template, every time you visit a tag of your blog, this page will be used instead of the Blog Page, to create a tag page just add the following attribute on the Body element of your page

> page=tag


### Author Page
 
This page is used to show the list of posts created by a given Author. This page must have the following attribute on the Body:

> page=author

### Remove

If you don't want a page to be converted insert the following attribute in the Body:

> page=remove

---------
> **Take in Mind**
>
> In our documentation you will find custom attributes in 2 formats:
>
> **name=value** or **name={dynamic-value}**
>
>
> **Attribute**             | **Meaning** | 
> -------------             | --------------- |
> | item=title              | *item* is the *Name* and *title* is the *Value* |
> | dimension={dimension}   | *dimension* is the *Name* and instead of {dimension} you have to insert one of the accepted value that you'll find indicated each time. For example dimension can be *master*|