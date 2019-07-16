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

If you don't define this attribute, it will search every post type.



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