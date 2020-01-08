---
id: version-2.2.0-woocommerce-shop-page
title: Shop Page
original_id: woocommerce-shop-page
---

In WooCommerce there are several type of pages that can be used as an archive of products of your Shop. Don't forget to define your page accordingly to the list below by adding the correspondent attribute on the body of the page:

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

## Archive Pages

- **Main Archive Page**

    This page is used for Main Shop Page and for taxonomies such as: Categories, Tags, Author if not defined otherwise.

    > page=archive
    >
    >post-type=product

- **Category page**

    This page is used for every category of your WooCommerce Shop. This page must have the following attribute on the Body:

    > page=taxonomy
    >
    > post-type=product_cat

- **Tag page**

    This page is used for every tag of your WooCommerce Shop. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=product_tag

- **Specific Category page**

    This page is used for a specific category of your WooCommerce Shop. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=product_cat
    >
    > specific={slug of your category or ID of your category}    


- **Specific Tag page**

    This page is used for a specific tag of your WooCommerce Shop. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=product_tag
    >
    > specific={slug of your tag or ID of your tag}

![](assets/shop-page.jpg)

*The following list includes all elements you can enter within these pages.*

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

## Archive Title

This is the archive page title (**e.g:** Category: My Category) and it can be added on every text element.

The attribute to enter is:

> wc=archive-title

## Archive Description

This is the archive page description and it can be added on every text element.

The attribute to enter is:

> wc=archive-description

## Archive Image

To set the image of your Archive page, insert a Image item or a Div to set as background image and enter the attribute:

> wc=archive-image


## Archive Products

It must be inserted on a Collection List Wrapper and it's the list of archive products. To enable pagination just add the pagination to the collection and you can control the number of products from *Appearance > Customize > WooCommerce >* and change the number of products by row and column.

The attribute to enter is:

> wc=archive-products

All the elements you can add in the Collection Item are available below:
- ### Date & Time
    It is the date and the time of publication of the product. Insert a text element and enter the attribute:

    > item=date

    To show the time of publication,  Insert a text element and enter the attribute:

    > item=time

    To handle the date format, you can use the following optional attribute:

    > format={date-format}

    For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

- ### Featured Image
    It's the featured image of the product. It can be added to an image or to any other element as background image, will also add the link if set on a link block.

    Insert the attribute:

    > item=featured-image

    To handle featured image settings, there are an optional attribute you can use:

    > dimension={dimension}

    Dimension can be 'full', 'medium', 'thumbnail', 'large' or defined in width and height (e.g 300, 500... don't forget spaces between values!)

- ### Title
    It's the title of the product and can be added to any text element, will also add the link if set on a link text.
    Insert the attribute:

    > item=title

- ### Short Description
    It's the short description of the product and can be added to any text element. Insert the attribute:

    > item=short-description

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
    It allows to link to the page showing products of that specific author. Insert a Link element and add the attribute:

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
    This is the link to the main category of a specific product. Insert a Button or a Link element and add the attribute:

    > item=main-category

- ### Permalink
    This is a link to a specific product. Insert a link element and add the attribute:

    > item=permalink

- ### Categories
    It shows categories of the product and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
    Insert the following attribute on the Link element:

    > item=categories

    Optionally, you can limit the number of categories to show adding the attribute

    >limit={number}

- ### Tags
    It shows tags of the product and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
    Insert the following attribute on the Link element:

    > item=tags

    Optionally, you can limit the number of tags to show adding the attribute

    >limit={number}

    
- ### From Sale Date
    This is a text appearing only if a sale product has been planned for a future date. It represents the starting date from which the product will be on sale.

    Insert a Text element and add the attribute:

    > item=from-sale-date

    To handle the date format, you can use the following optional attribute:

    > format={date-format}

    For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

- ### To Sale Date

    This is a text appearing only if a sale product has been planned for a future date. It represents the date from which the product will no longer be on sale.

    Insert a Text element and add the attribute:

    > item=to-sale-date

    To handle the date format, you can use the following optional attribute:

    > format={date-format}

    For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

- ### Total Sales

    This is WooCommerce total sales count for your products. 

    Insert a Text element and add the attribute:

    > item=total-sales

- ### Price

    This is the product price. Insert a Text element and add the attribute:

    > item=price

- ### Regular Price

    This is the barred full price that will appear if the product is on sale.

    Insert a Text element and add the attribute:

    > item=regular-price

- ### Product Dimensions

    These elements allows to handle the product dimensions.

    Insert Text elements with attributes, respectively:

    > item=lenght

    > item=weight

    > item=width

    > item=height

- ### Featured

    Any element you'll insert the following attribute in, will be visible only if that element is *featured*

    > item=featured

- ### On Sale

    Any element you'll insert the following attribute in, will be visible only if that element is *on sale*

    > item=on-sale

- ### SKU

    SKU is an identification of a particular product, used to track it. 

    Insert a Text element and add the attribute:

    > item=sku

- ### Rating

    Rating is a valutation system from 0 to 5. Setting the following attribute on any element:

    > item=rating

    that element will be duplicated a number of times equal to the current rating.

- ### Review Count

    This is a visual overview of all the reviews given to specific products.

    Insert a Text element and add the attribute:

    > item=review-count

- ### Add to Cart
    It will be automatic and you need to use the default Add to Cart by Webflow.    

## Masonry Products

Insert a Div element with the following attribute:

> wc=masonry-products

This Div element must contain several Collection List Wrappers. Each Collection List Wrapper need the attribute:

> limit={number of products you want to display}

Items you can insert within the Collection List Wrappers are the same as the ones available for the Archive Products, as documented above in this guide.     

## Archive Categories & Tags

Insert a Collection List Wrapper and enter the attributes, respectively for categories and tags:

> wc=categories

> wc=tags

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

> wc=breadcrumbs

The List element must contain 3 List items: the first one must contain a Link and it represent the breadcrumb to the parent category. The second List item is the separator and the third one is the current product. No attributes are needed on these List items.

## Orderby

This select allows to change the products order in the page. Insert a Form block with the attribute:

> wc=orderby

The Form block must contain one Select item.

## Results Count

This is the result text that shows up on the WooCommerce product archive pages that displays the amount of products you are currently viewing and the total amount of products in your current query.

Insert a Text element and add the attribute:

> wc=results-count


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