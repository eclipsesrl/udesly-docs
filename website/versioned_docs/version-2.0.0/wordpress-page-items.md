---
id: version-2.0.0-wordpress-page-items
title: Template and Default Pages Items
original_id: wordpress-page-items
---

You can create pages in Webflow that will be used in WordPress to create new pages. 

To define a page as *Default page* add the following attribute on the Body element:

> page=default

To define a page as *Template page* add the following attribute on the Body element:

> page=template

**If you do not select any template from the template selector, it will act as a generic Default page.**

<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-shopify-elements). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, you can start from scratch following the guide below.

## Date & Time
It is the date and the time of publication of the page. Insert a text element and enter the attribute:

> item=date

To show the time of publication, Insert a text element and enter the attribute:

> item=time

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

## Featured Image
It's the featured image of the page. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
Insert the attribute:

> item=featured-image

To handle featured image settings, there are an optional attribute you can use:

> dimension={dimension}

Dimension can be 'full', 'medium', 'thumbnail', 'large' or defined in width and height (e.g 300, 500... don't forget spaces between values!)

## Title
It's the title of the page and can be added to any text element, will also add the link if set on a link text.
Insert the attribute:

> item=title

## Excerpt
It's the excerpt of the page and can be added to any text element. Insert the attribute:

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
It allows to link to the page of a specific author. Insert a Link element and add the attribute:

> item=author-url

## Author Contacts
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

## Main Category 
This is the link to the main category of a specific page. Insert a Button or a Link element and add the attribute:

> item=main-category

## Permalink
This is a link to a specific page. Insert a link element and add the attribute:

> item=permalink

## Categories
It shows categories of the page and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
 Insert the following attribute on the Link element:

> item=categories

Optionally, you can limit the number of categories to show adding the attribute

>limit={number}

## Tags
It shows tags of the page and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
Insert the following attribute on the Link element:

> item=tags

Optionally, you can limit the number of tags to show adding the attribute

>limit={number}

## Content
Insert a Richtext element and add the attribute:

> item=content

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