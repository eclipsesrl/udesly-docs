---
id: version-2.2.0-ghost-post-page
title: Post Page
original_id: ghost-post-page
---

This page is used for each Post of your Ghost Blog. 

![](assets/ghost-single-post.png)

This page must have the following attribute on the Body:

> page=post

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

*The following list includes all elements you can enter within this page.*

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.


- ## Date

It is the date of publication of the post. Insert a text element and enter the attribute:

> item=date

    
- ## Featured Image
It's the featured image of the post. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
Insert the attribute:

> item=featured-image


- ## Title
It's the title of the post and can be added to any text element, will also add the link if set on a link text.
Insert the attribute:

> item=title

- ## Excerpt
It's the excerpt of the post and can be added to any text element. Insert the attribute:

> item=excerpt

There are some optional parameters that allow to handle the excerpt. Manage the number of words you want the excerpt is made up by adding this optional attribute:

> words={number of words}

To manage the number of characters:

> characters={number of characters}

Obviously, one precludes the other.    


- ## Tags
It shows tags of the post and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
Insert the following attribute on the Link element:

> item=tags

Optionally, you can define the separator amongst tags by adding the attribute

> separator={your separator}

For example, we want to separate tags by |. We add the attribute:

> separator=|

This tags list creates links pointing to tags. You can disable this feature by adding this attribute:

> autolink=false

Or you can limit the number of tags through this attribute:

> limit={number of tags you want to show}    

- ## Authors
It shows authors of the post and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
Insert the following attribute on the Link element:

> item=authors

Optionally, you can define the separator amongst authors by adding the attribute

> separator={your separator}

For example, we want to separate authors by |. We add the attribute:

> separator=|

This authors list creates links pointing to tags. You can disable this feature by adding this attribute:

> autolink=false

Or you can limit the number of authors through this attribute:

> limit={number of tags you want to show}

- ## ID
If you want to show the post ID as element ID, insert a Text element and add the attribute:

> item=id

- ## Content
This is the content of the post. Insert a Text element and add the attribute:

> item=content

- ## Meta Title
This is the custom meta title for the post. Insert a Text element and add the attribute:

> item=meta-title

- ## Meta Description
This is the custom meta description for the post. Insert a Text element and add the attribute:

> item=meta-description

- ## Url
This is the web address for the post page. Insert a Link element and add the attribute:

> item=url

- ## Published at
This is the date and time when the post was published. Insert a Text element and add the attribute:

> item=published-at

- ## Updated at
This is the date and time when the post was last updated. Insert a Text element and add the attribute:

> item=updated-at

- ## Created at
This is the date and time when the post was created. Insert a Text element and add the attribute:

> item=created-at

**Date - Published at - Updated at - Created at** may include 2 optional attributes:

**Format:** you can select the date format by choosing in this [library](https://momentjs.com/docs/#/displaying/format/). Insert the attribute:

    > format={your format}

**Time ago:** you can show how long it's been since the post publication, update or creation. Insert the attribute:

    > timeago=true

- ## Reading Time
    If you want to add an estimated reading time of the post of your blog, insert a Text element with this attribute.

> item=reading-time

- ## Prev & Next button
  Insert two links with these attributes, respectively:

> item=prev-post

> item=next-post

If you want to insert buttons pointing to posta of the same category as the current one, the two links must have these attributes, respectively:

> item=prev-post-in-tag

> item=next-post-in-tag


## Primary Tag

Ghost has a concept of *primary_tag*, used simply to refer to the very first tag which a post has. This is useful for when you want to return a singular, most-important tag rather than a full array of all tags assigned to a post. You can add the following attributes within the post card or inside the single post:

> primary-tag=id

This is the incremental ID of the tag

> primary-tag=name

This is the name of the tag

> primary-tag=description

This is the description of the tag

> primary-tag=featured-image

This is the featured image of the tag

> primary-tag=meta-title

This is the tag's meta title

> primary-tag=meta-description

This is the tag's meta description

> primary-tag=url

This is the web address for the tag's page. 

## Primary Author

To output just the singular, first author, use the *primary_author* helper to output a simple link.

> primary-author=id

This is the incremental ID of the author

> primary-author=name

This is the name of the author

> primary-author=bio

This is the bio of the author

> primary-author=location 

This is the location of the author

> primary-author=profile-image

This is the profile image for the author

> primary-author=cover-image

This is the cover image for the author

> primary-author=meta-title

This is the author's meta title

> primary-author=meta-description

This is the author's meta description

> primary-author=twitter

This is the author's twitter username

> primary-author=facebook

This is the author's facebook username

> primary-author=website

This is the website of the author

> primary-author=url

This is the web address for the author's page. 

## Same Tag Posts

If you want to display all the posts having the same tag, insert a Collection List Wrapper and add this attribute:

> blog=same-tag

As option, you can insert these further attributes.

> limit={number of posts you want to display}
Specify the size of your collection.

> order={value you want the posts will be sorted} 
You can choose any valid resource field in ascending (asc) or descending (desc) order.

> visibility=all
To display all the posts, even those are private.

## Same Author Posts

If you want to display all the posts having the same author, insert a Collection List Wrapper and add this attribute:

> blog=same-author

As option, you can insert these further attributes.

> limit={number of posts you want to display}

Specify the size of your collection.

> order={value you want the posts will be sorted} 

You can choose any valid resource field in ascending (asc) or descending (desc) order.

> visibility=all

To display all the posts, even those are private.

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