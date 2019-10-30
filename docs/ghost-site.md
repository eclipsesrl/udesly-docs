---
id: ghost-site
title: @Site
---

The following items can be inserted everywhere in the site.

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

The @site property provides access to global settings, which are available anywhere in your theme:

### Url
The url specified for this site in your custom config file. Insert a Link element and add the attribute:

> site=url

### Title
The site title from general settings. Insert a Text element and add the attribute:

> site=title

### Description
The site description from general settings. Insert a Text element and add the attribute:

> site=description

### Icon
The publication icon from general settings. Insert an Image element and add the attribute:

> site=icon

### Logo 
The site logo from general settings. Insert an Image element and add the attribute:

> site=logo

### Cover Image
The site cover image from general settings. Insert an Image element and add the attribute:

> site=cover-image

### Twitter
The twitter URL from general settings. Insert a Link element and add the attribute:

> site=twitter

### Facebook
The facebook URL from general settings. Insert a Link element and add the attribute:

> site=facebook

### Navigation
The navigation information configured in settings/design. Insert a Text Link element and add the attribute:

> site=navigation

Insert this attribute on one single Text Link. It will be repeated among all others.

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