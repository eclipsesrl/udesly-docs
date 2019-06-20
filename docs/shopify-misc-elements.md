---
id: shopify-misc-elements
title: Misc elements
---

The following elements are not a prerogative of the Blog page and can be inserted anywhere within the site.

#### Blog Link

It's the link to the blog and it can be used everywhere in the project.

Insert a link or a button element and enter the attribute:

> blog-link={blog handle}

**e.g:** blog-link=news


#### Blog Articles

This element will create a Blog picker setting where your customer will be able to choose a blog and how many posts to show.
It can be used everywhere in the project. **Pagination cannot be added.**

The following attribute must be set on a collection lists wrapper:

> blog:articles={your blog setting name}

To see what you can set inside blog cards see blog-items.md


#### Blog All Blogs

This is the list of all the blogs of your site and can be used everywhere in the project.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> blog=all-blogs