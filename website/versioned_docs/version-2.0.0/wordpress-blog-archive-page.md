---
id: version-2.0.0-wordpress-blog-archive-page
title: Post Archive Page
original_id: wordpress-blog-archive-page
---

In WordPress that are several type of pages that can be used as an archive of post of your Blog. Don't forget to define your page accordingly to the list below by adding the correspondent attribute on the body of the page:

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

## Archive Pages

- **Main Archive Page**

    This page is used for Main Blog Page and for taxonomies such as: Categories, Tags, Author if not defined otherwise.

    > page=archive

- **Category page**

    This page is used for every category of your WordPress Blog. This page must have the following attribute on the Body:

    > page=taxonomy


- **Specific Category page**

    This page is used for a specific category of your WordPress Blog. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > specific={slug of your category or ID of your category}    

- **Tag page**

    This page is used for every tag of your WordPress Blog. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=tag


- **Specific Tag page**

    This page is used for a specific tag of your WordPress Blog. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=tag
    >
    > specific={slug of your tag or ID of your tag}

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

To see all the elements you can enter in the Author page, check the relative guide [here](wordpress-author-page).

![](assets/blog-archive-page.png)

*The following list includes all elements you can enter within these pages.*

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

## Archive Title

This is the archive page title (**e.g:** Category: My Category) and it can be added on every text element.

The attribute to enter is:

> blog=archive-title

This item is customizable from the Udesly plugin. In **Settings** option, you can manage how the title has to be displayed in the blog page, category page, tag page and all the other post archive page of your site. 

## Archive Description

This is the archive page description and it can be added on every text element.

The attribute to enter is:

> blog=archive-description

This item is customizable from the Udesly plugin. In **Settings** option, you can manage how the title has to be displayed in the blog page, category page, tag page, specific category page, specific tag page and all the other post archive page of your site. 

## Archive Image

To set the image of your Archive page, insert a Image item or a Div to set as background image and enter the attribute:

> blog=archive-image


## Archive Posts

It must be inserted on a Collection List Wrapper and it's the list of archive posts. To enable pagination just add the pagination to the collection and you can control the number of posts from *settings --> reading*

The attribute to enter is:

> blog=archive-posts

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

- ### Categories
    It shows categories of the post and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
    Insert the following attribute on the Link element:

    > item=categories

    Optionally, you can limit the number of categories to show adding the attribute

    >limit={number}

- ### Tags
    It shows tags of the post and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
    Insert the following attribute on the Link element:

    > item=tags

    Optionally, you can limit the number of tags to show adding the attribute

    >limit={number}

## Archive Categories & Tags

Insert a Collection List Wrapper and enter the attributes, respectively for categories and tags:

> blog=categories

> blog=tags

Inside Collection item you can use the following attributes:

-  ### Description
    
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

## Breadcrumbs

Insert a List element and add the attribute:

> blog=breadcrumbs

The List element must contain 3 List items: the first one must contain a Link and it represent the breadcrumb to the parent category. The second List item is the separator and the third one is the current post. No attributes are needed on these List items.

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