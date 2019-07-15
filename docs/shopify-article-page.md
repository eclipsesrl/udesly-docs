---
id: shopify-article-page
title: Article Page
---

Here you can find a list of all elements you can enter within the **Single Article** page of your Shopify site.

This page must have the following attribute on the Body:

> page=article

## Date
It is the date of publication of the article. Insert a text element and enter the attribute:

> item=date

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [strfti.me](http://www.strfti.me/)

## Featured Image
It's the featured image of the article. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
Insert the attribute:

> item=featured-image

To handle featured image settings, there are several optional attributes you can use.

> dimension={dimension}

> scale={scale}

> format={format}

> crop={crop}

## Title
It's the title of the article and can be added to any text element, will also add the link if set on a link text.
Insert the attribute:

> item=title

## Excerpt
It's the excerpt of the article and can be added to any text element.
Insert the attribute:

> item=excerpt

## Tags
It shows tags of the article and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
Insert he attribute:

> item=tags

## Author Email
It can be set on a text element or a link, if set on a link it will be a mailto:

Insert the attribute:

> item=author-email

## Author
It displays author first name and last name and links to author home page and can be set on a text element or a link.
Insert the attribute:

> item=author

## Author Bio
It's the biography of the author and can be set on a text element.
Insert the attribute:

> item=author-bio

## Avatar
It's the image of the author but only if uploaded also in Shopify will not get gravatar. It can be set on a image or div.
Insert the attribute:

> item=avatar

## Content
It's the content of the post and can be set on a richtext element.
Insert the attribute:

> item=content

## Navigation
These elements help you to browse among posts:

- ### Previous Article
  To create a link to the previous article, insert a Link or a button item and assign the attribute:

  > item=previous-article

- ### Next Article
  To create a link to the next article, insert a Link or a button item and assign the attribute:

  > item=next-article
