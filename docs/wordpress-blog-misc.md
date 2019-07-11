---
id: wordpress-blog-misc
title: Blog Misc
---

The following Blog items can be inserted everywhere in the site.

## Archive Link

This is the link to the Archive Blog page. Insert the following attribute on link elements:

> blog=archive-link

## Category Link

This is the link to a specific category of your Blog. Insert a link item and add the attribute:

> category-link={category-slug}

## Tag Link

This is the link to a specific tag of your Blog. Insert a link item and add the attribute:

> tag-link={tag-slug}

## Specific Post

It allows to show up a specific post. Insert a Div element with the attribute:

> blog:specific-post={slug or id}

Inside the Div, all you can use inside collection list item is available here.

## Queried Posts

It's a posts collection you selected using Udesly WordPress plugin from posts queries menu. Insert a Collection lists wrapper and, if you want, you can be pagination.
Insert the attribute:

> blog:posts={slug of the query in the plugin}`

Inside the Div, all you can use inside collection list item is available here.

## Blog Slider

Insert a Slider item and add the attribute:

> blog:slider={slug della query nel plugin}

Inside the Slide, all you can use inside collection list item is available here.
