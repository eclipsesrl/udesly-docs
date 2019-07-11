---
id: wordpress-blog-overview
title: Blog Overview
---

WordPress blog structure works with different pages that can be grouped in 2 different types: 

## Archive Pages

- **Main Archive Page**

    This page is used for Main Blog Page and for taxonomies such as: Categories, Tags, Author if not defined otherwise.

    > page=archive

 

## Single Pages

- **Single Post Page**

    This page is used for each Post of your WordPress Blog. This page must have the following attribute on the Body:

    > page=single


**To make your WordPress Blog work correctly, only these 2 pages above are REQUIRED.**


If you want to customize the style of the blog further, there are other page types at your disposal:

## Taxonomy Pages

- **Category page**

    This page is used for every category of your WordPress Blog. This page must have the following attribute on the Body:

    > page=taxonomy

- **Tag page**

    This page is used for every tag of your WordPress Blog. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=tag

- **Specific Category page**

    This page is used for a specific category of your WordPress Blog. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > specific={slug of your category or ID of your category}    


- **Specific Tag page**

    This page is used for a specific tag of your WordPress Blog. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=tag
    >
    > specific={slug of your tag or ID of your tag}


## Author Pages

- **Author Page**
 
    This page is used to show the list of posts created by a given Author. This page must have the following attribute on the Body:

     > page=archive
     >
     > post-type=author
    

- **Specific Author Page** 

    If you want to give a different style to a given Author page, you have to set it as Specific Author page. This page must have the following attribute on the Body:

     > page=archive
     >
     > post-type=author
     >
     > specific={author nicename or author ID}


## Specific Single Post Pages

- **Specific Post**

    This page is used for a *specific* post of your WordPress Blog to give it a different style from the others . This page must have the following attribute on the Body:

    > page=single
    >
    > specific={slug of your post or ID of your post}


## Single Post Template 

- **Single Post Template**

    This page is a template that can be used instead of your generic single post page. To be displayed, you have to select the template from WordPress backend (for each post). This page must have the following attribute on the Body:

    > page=template
    >
    > post-type=post

