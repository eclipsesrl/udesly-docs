---
id: version-2.0.0-wordpress-lists
title: Lists
original_id: wordpress-lists
---
You can insert lists to create numbered or bulleted lists of content.

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Insert a **Collection List Wrapper** element and insert this attribute:

> lists={slug-of-the-lists}

You find the lists slug into the WP plugin. To set lists correctly in the Udesly plugin, check this [guide](https://docs.udesly.com/wordpress-plugin-terms-queries).

Elements you can add in the Collection Item are available below:

- ### Title
    Can be added to any text element, will also add the link if set on a link text.
    Insert the attribute:

    > item=title

- ### Featured Image
    Can be added to an image or to any other element as background image, will also add the link if set on a link block.
    Insert the attribute:

    > item=featured-image

    To handle featured image settings, there are an optional attribute you can use:

    > dimension={dimension}

    Dimension can be 'full', 'medium', 'thumbnail', 'large' or defined in width and height (e.g 300, 500... don't forget spaces between values!)

- ### Permalink
    Insert a link element and add the attribute:

    > item=permalink

- ### Description
    On Text elements:

    > item=description

- ### Count
    Insert a Text element and add the attribute:

    > item=review-count


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