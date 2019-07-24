---
id: version-2.0.0-wordpress-search-form
title: Search Form
original_id: wordpress-search-form
---
This is the usual search form that you can use in your site, in any page you want, and choose to use it to show posts, products or both of them.

This element can be entered wherever you prefer within your Webflow project.

![](assets/search-form.png)

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

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