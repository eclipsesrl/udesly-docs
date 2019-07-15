---
id: shopify-blog-page
title: Blog Page
---

This guide shows how to add the attributes in Webflow to configure the blog  and have it ready to convert to Shopify through the Udesly Adapter. Some of these items can be used only in the page set as **Blog page** (Blog page must have the following attribute entered on the body):

> page=blog


## Blog Title

This is the blog title (**e.g:** News) and it can be added on every text element.

The attribute to enter is:

> blog=title


## Blog Archive Posts

It must be inserted on a Collection List Wrapper and it's the list of archive posts. To enable pagination just add the pagination to the collection and you can control the number of posts from *Shopify -> Online Store > Themes > Customize*

The attribute to enter is:

> blog=archive-posts

All the elements you can add in the Collection Item are available below:
- ### Date
  It is the date of publication of the article. Insert a text element and enter the attribute:

  > item=date

  To handle the date format, you can use the following optional attribute:

  > format={date-format}

  For date format type use [strfti.me](http://www.strfti.me/)

- ### Featured Image
  It's the featured image of the article. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
  Insert the attribute:

  > item=featured-image

  To handle featured image settings, there are several optional attributes you can use.

  > dimension={dimension}

  > scale={scale}

  > format={format}

  > crop={crop}

- ### Title
  It's the title of the article and can be added to any text element, will also add the link if set on a link text.
  Insert the attribute:
 
  > item=title

- ### Link
  It's the link to the article and can be added to any a element.
  Insert the attribute:

  > item=link

- ### Excerpt
  It's the excerpt of the article and can be added to any text element.
  Insert the attribute:

  > item=excerpt

- ### Tags
  It shows tags of the article and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
  Insert he attribute:

  > item=tags

- ### Author Email
  It can be set on a text element or a link, if set on a link it will be a mailto:
  Insert the attribute:

  > item=author-email

- ### Author
  It displays author first name and last name and links to author home page and can be set on a text element or a link.
  Insert the attribute:

  > item=author

- ### Author Bio
  It's the biography of the author and can be set on a text element.
  Insert the attribute:

  > item=author-bio

- ### Avatar
  It's the image of the author but only if uploaded also in Shopify will not get gravatar. It can be set on a image or div.
  Insert the attribute:

  > item=avatar

- ### Content
  It's the content of the post and can be set on a richtext element.
  Insert the attribute:

  > item=content

## Blog Tags

This element returns all tags in a blog. Similar to **all_tags** but it only returns tags of articles that are in the filtered view.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> blog=tags


## Blog All Tags

It returns all tags of all articles of a blog. This includes tags of articles that are not in the current pagination view.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> blog=all-tags
