---
id: wordpress-cpt-single-page
title: Single Custom Post Type Page
---

In WordPress that are several type of pages that can display a single post of your Blog. Don't forget to define your page accordingly to the list below:

## Single Post Pages

- **Single CPT Page**

    This page is used for each CPT of your WordPress. This page must have the following attribute on the Body:

    > page=single
    >
    > post-type={your post type}

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

*The following list includes all elements you can enter within these pages*


## Date & Time
It is the date and the time of publication of the post. Insert a text element and enter the attribute:

> item=date

To show the time of publication,  Insert a text element and enter the attribute:

> item=time

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

## Featured Image
It's the featured image of the post. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
Insert the attribute:

> item=featured-image

To handle featured image settings, there are an optional attribute you can use:

> dimension={dimension}

Dimension can be 'full', 'medium', 'thumbnail', 'large' or defined in width and height (e.g 300, 500... don't forget spaces between values!)

## Title
It's the title of the post and can be added to any text element, will also add the link if set on a link text.
Insert the attribute:

> item=title

## Excerpt
It's the excerpt of the post and can be added to any text element. Insert the attribute:

> item=excerpt

## Avatar
It's the image of the author from Gravatar. It can be set on a Image or Div. Insert the attribute:

> item=avatar

## Author Data
It displays author data and can be set on a text element. Attributes available are:

> item=author-display-name
>
> item=author-nickname
>
> item=author-first-name
>
> item=author-last-name

## Author Description
It displays the author description and can be set o a text element. Insert the attribute:

> item=author-description

## Author Url
It allows to link to the page showing posts of that specific author. Insert a Link element and add the attribute:

> item=author-url

## Author Contact
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

## Permalink
This is a link to a specific post. Insert a link element and add the attribute:

> item=permalink


## Content
Insert a Richtext element and add the attribute:

> item=content

## Navigation
To enable the internal pagination of a specific post, insert Link or Button items and add the attributes:

> item=next-page
>
> item=prev-page


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