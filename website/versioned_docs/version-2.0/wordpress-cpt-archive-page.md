---
id: version-2.0-wordpress-cpt-archive-page
title: Post Archive Page
original_id: wordpress-cpt-archive-page
---

Custom post types are content types like posts and pages. Since WordPress evolved from a simple blogging platform into a robust CMS, the term *post* stuck to it. However, a post type can be any kind of content.

The Udesly plugin controls if pages you've created as CPT already use a CPT defined by a third party plugin. If it's not already defined, the plugin gives you the possibility to create one. Just follow the path from WP admin panel: *Udesly > Custom Post Types* 

In WordPress that are several type of pages that can be used as an archive of custom post type. Don't forget to define your page accordingly to the list below by adding the correspondent attribute on the body of the page:

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

## Archive Pages

- **Main Archive Page**

    This page is used for Main archive for CPT Page and for CPT taxonomies.

    > page=archive
    >
    > post-type={your post type}


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


*The following list includes all elements you can enter within these pages.*

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

## Archive Title
This will be the title of your blog archive. To create it select a Text Block and insert the attribute:

> cpt=archive-title

## Archive Image
This is the image of your archive. You can select a **Div Block** or an **Image**
Insert the attribute:

> cpt=archive-image

## Archive Description
This is the description of your archive. Select a **Text** element and add the attribute:

> cpt=archive-description

## Archive Posts
It must be inserted on a Collection List Wrapper and it's the list of archive posts. To enable pagination just add the pagination to the collection and you can control the number of posts from *settings --> reading*

The attribute to enter is:

> cpt=archive-posts

All the elements you can add in the Collection Item are available below:
- ### Date & Time
    It is the date and the time of publication of the post. Insert a text element and enter the attribute:

    > item=date

    To show the time of publication,  Insert a text element and enter the attribute:

    > item=time

    To handle the date format, you can use the following optional attribute:

    > format={date-format}

    For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

- ### Featured Image
    It's the featured image of the post. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
    Insert the attribute:

    > item=featured-image

    To handle featured image settings, there are an optional attribute you can use:

    > dimension={dimension}

    Dimension can be 'full', 'medium', 'thumbnail', 'large' or defined in width and height (e.g 300, 500... don't forget spaces between values!)

- ### Title
    It's the title of the post and can be added to any text element, will also add the link if set on a link text.
    Insert the attribute:

    > item=title

- ### Excerpt
    It's the excerpt of the post and can be added to any text element. Insert the attribute:

    > item=excerpt

- ### Avatar
    It's the image of the author from Gravatar. It can be set on a Image or Div. Insert the attribute:

    > item=avatar

- ### Author Data
    It displays author data and can be set on a text element. Attributes available are:

    > item=author-display-name
    >
    > item=author-nickname
    >
    > item=author-first-name
    >
    > item=author-last-name

- ### Author Description
    It displays the author description and can be set o a text element. Insert the attribute:

    > item=author-description

- ### Author Url
    It allows to link to the page showing posts of that specific author. Insert a Link element and add the attribute:

    > item=author-url

- ### Author Contacts
    To link to social or email accounts of a specific author, you have to insert a Link element and add the attributes regarding the contact you want to link among these:

    > item=author-email
    > 
    > item=author-facebook
    >
    > item=author-linkedin
    >
    > item=author-youtube 
    >
    > item=author-twitter
    >
    > item=author-dribble
    >
    > item=author-instagram
    >
    > item=author-phone

- ### Main Category 
    This is the link to the main category of a specific post. Insert a Button or a Link element and add the attribute:

    > item=main-category

- ### Permalink
    This is a link to a specific post. Insert a link element and add the attribute:

    > item=permalink


## Taxonomies

Insert a Collection List Wrapper and enter the attribute:

> cpt:taxonomies={taxonomy name}

Inside Collection item you can use the following attributes:

- ### Description

    On Text elements:

    > item=description

- ### Title

    On Text or Link:

    > item=title

- ### Permalink 

    On Link elements:

    > item=permalink

- ### Featured Image

    On Div, Link or img elements:

    > item=featured-image

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