---
id: shopify-search-items
title: Search Items
---

This guide aims to show all the items that characterize a "search" object in Shopify. These elements can be added within a Collection List item.

#### Date
It is the date of publication of the article. Insert a text element and enter the attribute:

> item=date

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [strfti.me](http://www.strfti.me/)

#### Featured Image
It's the featured image of the article. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
Insert the attribute:

> item=featured-image

To handle featured image settings, there are several optional attributes you can use.

> dimension={dimension}

> scale={scale}

> format={format}

> crop={crop}

#### Title
It's the title of the article and can be added to any text element, will also add the link if set on a link text.
Insert the attribute:

> item=title

#### Link
It's the link to the article and can be added to any a element.
Insert the attribute:

> item=link

#### Excerpt
It's the excerpt of the article and can be added to any text element.
Insert the attribute:

> item=excerpt

#### Author Email
It can be set on a text element or a link, if set on a link it will be a mailto:
Insert the attribute:

> item=author-email


#### Author
It displays author first name and last name and links to author home page and can be set on a text element or a link.
Insert the attribute:

> item=author

#### Author Bio
It's the biography of the author and can be set on a text element.
Insert the attribute:

> item=author-bio


#### Avatar
It's the image of the author but only if uploaded also in Shopify will not get gravatar. It can be set on a image or div.
Insert the attribute:

> item=avatar


#### Content
It's the content of the post and can be set on a richtext element.
Insert the attribute:

> item=content
