---
id: version-2.0.0-wordpress-cpt-overview
title: Custom Post Types Overview
original_id: wordpress-cpt-overview
---

Custom post types are content types like posts and pages. Since WordPress evolved from a simple blogging platform into a robust CMS, the term *post* stuck to it. However, a post type can be any kind of content.

The Udesly plugin controls if pages you've created as CPT already use a CPT defined by a third party plugin. If it's not already defined, the plugin gives you the possibility to create one. Just follow the path from WP admin panel: *Udesly > Custom Post Types* 

WordPress CPT structure works with different pages that can be grouped in 2 different types: 

## Archive Pages

- **Main Archive Page**

    This page is used for Main archive for CPT Page and for CPT taxonomies.

    > page=archive
    >
    > post-type={your post type}

 

## Single Pages

- **Single CPT Page**

    This page is used for each CPT of your WordPress. This page must have the following attribute on the Body:

    > page=single
    >
    > post-type={your post type}


**To make your WordPress CPT work correctly, only these 2 pages above are REQUIRED.**


If you want to customize the style of the CPT further, there are other page types at your disposal:

## Taxonomy Pages

If a third party plugin has defined a taxonomy for a CPT, you can use that taxonomy. Otherwise, if you created the CPT in the Udesly plugin, you'll find there a field allowing to define taxonomies. The Udesly plugin will define these taxonomies in a specific format: {post-type}_{taxonomy}. 

E.g: if you created a post type called *event* and added taxonomies as category, the taxonomy will be **event_category**

- **Taxonomy page**

    This page is used for every tag of your WordPress. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type={your taxonomy}



- **Specific Taxonomy page**

    This page is used for a specific taxonomy of your WordPress. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type={your taxonomy}
    >
    > specific={slug of your tag or ID of your taxonomy}



## Specific Single CPT Pages

- **Specific CPT**

    This page is used for a *specific* post of your WordPress to give it a different style from the others . This page must have the following attribute on the Body:

    > page=single
    >
    > post-type={your post type}
    >
    > specific={slug of your post or ID of your post}


## Single Custom Post Type Template 

- **Single Custom Post Type Template**

    This page is a template that can be used instead of your generic single cpt page. To be displayed, you have to select the template from WordPress backend (for each post). This page must have the following attribute on the Body:

    > page=template
    >
    > post-type={your post type}



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