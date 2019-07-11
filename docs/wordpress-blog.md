---
id: wordpress-blog
title: Blog Page
---

This guide aims to show the use of attributes for the configuration of the blog in Webflow and make it convertible to WordPress through the Udesly Adapter.

*The following items can be used only in the page that WordPress considers as a post archive page, for example the **blog page** (Blog page must have the following attribute entered on the body):*

> page=archive

*Or you can use the following items in pages set as Categories, Tags, specific category or specific tag.*

*To see how to create these pages, check Pages structure section or Most used page types section.*

## Archive Title

This is the blog title (**e.g:** News) and it can be added on every text element.

The attribute to enter is:

> blog=archive-title

## Archive Image

To set the image of your Archive page, insert a Image item or a Div to set as background image and enter the attribute:

> blog=archive-image


## Archive Posts

It must be inserted on a Collection List Wrapper and it's the list of archive posts. To enable pagination just add the pagination to the collection and you can control the number of posts from *settings --> reading*

The attribute to enter is:

> blog=archive-posts

All the elements you can add in the Collection Item are available here.

## Archive Categories & Tags

Insert a Collection List Wrapper and enter the attributes, respectively for categories and tags:

> blog=categories

> blog=tags

Inside Collection item you can use the following attributes:

#### Description

On Text elements:

> item=description

#### Title

On Text or Link:

> item=title

#### Permalink 

On Link elements:

> item=permalink

#### Featured Image

On Div, Link or img elements:

> item=featured-image


*The following items are available for all the pages of your Webflow project and you're not forced to use them in the Blog page only:*

