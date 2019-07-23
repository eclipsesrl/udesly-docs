---
id: woocommerce-single-product-page
title: Single Product Page
---

In WordPress that are several type of pages that can display a single post of your Blog.  Don't forget to define your page accordingly to the list below by adding the correspondent attribute on the body of the page:

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

- **Single Product Page**

    This page is used for each Product of your Shop. This page must have the following attribute on the Body:

    > page=single
    >
    > post-type=product    


- **Specific Product**

    This page is used for a *specific* produc of your WooCommerce to give it a different style from the others . This page must have the following attribute on the Body:

    > page=single
    >
    >post-type=product
    >
    > specific={slug of your post or ID of your product}

**Webflow allows to include Add to Cart element only in the default product template. For this reason you can include Add to Cart element in a specific Single Product page. This kind of page may be useful for external or coming soon products.**

- **Single Product Template**

    This page is a template that can be used instead of your generic single product page. To be displayed, you have to select the template from WordPress backend (for each product). This page must have the following attribute on the Body:

    > page=template
    >
    > post-type=product

**Webflow allows to include Add to Cart element only in the default product template. For this reason you can include Add to Cart element in a specific Single Product page. This kind of page may be useful for external or coming soon products.**

*The following list includes all elements you can enter within these pages.*

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

## Date & Time
It is the date and the time of publication of the product. Insert a text element and enter the attribute:

> item=date

To show the time of publication, Insert a text element and enter the attribute:

> item=time

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

## Featured Image
It's the featured image of the product. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
Insert the attribute:

> item=featured-image

To handle featured image settings, there are an optional attribute you can use:

> dimension={dimension}

Dimension can be 'full', 'medium', 'thumbnail', 'large' or defined in width and height (e.g 300, 500... don't forget spaces between values!)

## Title
It's the title of the product and can be added to any text element, will also add the link if set on a link text.
Insert the attribute:

> item=title

## Short Description
It's the short description of the product and can be added to any text element. Insert the attribute:

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
It allows to link to the page showing products of that specific author. Insert a Link element and add the attribute:

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
This is the link to the main category of a specific product. Insert a Button or a Link element and add the attribute:

> item=main-category

## Permalink
This is a link to a specific product. Insert a link element and add the attribute:

> item=permalink

## Categories
It shows categories of the product and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
 Insert the following attribute on the Link element:

> item=categories

Optionally, you can limit the number of categories to show adding the attribute

>limit={number}

## Tags
It shows tags of the product and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
Insert the following attribute on the Link element:

> item=tags

Optionally, you can limit the number of tags to show adding the attribute

>limit={number}

## Description
Insert a Richtext element and add the attribute:

> item=description

## Internal Navigation
To enable the internal pagination of a specific product, insert Link or Button items and add the attributes:

> item=next-page
>
> item=prev-page

## External Navigation
To enable the external pagination among products, insert Link or Button items and add the attributes:

> item=next-product
>
> item=prev-product

## From Sale Date
This is a text appearing only if a sale product has been planned for a future date. It represents the starting date from which the product will be on sale.

Insert a Text element and add the attribute:

item=from-sale-date

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

## To Sale Date

This is a text appearing only if a sale product has been planned for a future date. It represents the date from which the product will no longer be on sale.

Insert a Text element and add the attribute:

> item=to-sale-date

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [this guide](https://wordpress.org/support/article/formatting-date-and-time/)

## Total Sales

This is WooCommerce total sales count for your products. 

Insert a Text element and add the attribute:

> item=total-sales

## Price

This is the product price, 

Insert a Text element and add the attribute:

> item=price

## Regular Price

This is the barred full price that will appear if the product is on sale.

Insert a Text element and add the attribute:

> item=regular-price

## Product Dimensions

These elements allows to handle the product dimensions.

Insert Text elements with attributes, respectively:

> item=lenght

> item=weight

> item=width

> item=height

## Featured

Any element you'll insert the following attribute in, will be visible only if that element is *featured*

> item=featured

## On Sale

Any element you'll insert the following attribute in, will be visible only if that element is *on sale*

> item=on-sale

## SKU

SKU is an identification of a particular product, used to track it. 

Insert a Text element and add the attribute:

> item=sku

## Rating

Rating is a valutation system from 0 to 5. Setting the following attribute on any element:

> item=rating

that element will be duplicated a number of times equal to the current rating.

## Review Count

This is a visual overview of all the reviews given to specific products.

Insert a Text element and add the attribute:

> item=review-count

## Product Images
It can be set on an Image, Div, Slider, Lightbox and on a Lightbox contained in a Collection List item. It will be repeated 1 time for image set (except if you're using a Lightbox not contained in a Collection List item).

> item=product-images

## Add to Cart
Webflow Add to cart gets automatically converted. Use the default Add to cart and enter these elements inside it:

A Div element with: 

  > item=variations

  and, inside it, a Text element with:

   > item=variation-title

  Finally, insert a Label (no attributes required for it). It will take the background image of the option or, if not configured, the name of the option itself.

The Add to Cart as explained above works with 3 kinds of products: simple, external, variable.
If you want to configure it for **grouped products** as well, follow these steps:

  Insert a Form Block with the attribute:

  > item=grouped

  Inside the Form block, insert a Div with the attribute:

  > item=wrapper

  This Div must contain:
   - 1 Label for the product name
   - 1 input type=number for the quantity
   - 1 input type=checkbox showed if the product can be acquired singularly.

   Optionally, you can add in the same Div:
   - A Text element with the attribute:
     > item=price
   - A Text element with the attribute:
     > item=regular-price
   - A Link element with the attribute:
     > item=link

  The Div will be automatically repeated as many times as the number of products grouped you have set for the current product.


## Product Tabs

Insert a *Tabs* element inside the page and add the attribute 

> item=tabs

Just insert a *Richtext* element inside the first Tab Content.
Only the first tab will be considered and duplicated based on product tabs that are enabled in WooCommerce. 
   
## Breadcrumbs

Insert a List element and add the attribute:

> wc=breadcrumbs

The List element must contain 3 List items: the first one must contain a Link and it represent the breadcrumb to the parent category. The second List item is the separator and the third one is the current product. No attributes are needed on these List items.   

## Upsells

Up-sells are products that you recommend instead of the currently viewed product.

They are typically products that are more profitable or better quality or more expensive. Depending on your theme template, these products display on the single product page underneath the product’s description.

It must be inserted on a Collection List Wrapper and it's the list of upsells products. You can't enable pagination but you can control the number of products from Udesly > Settings > WooCommerce

Add the attribute on the Collection List Wrappers

> wc=upsells

Inside the Collection List Item, you can use all the elements you can find [here](#product-elements).

**The number of upsells can be managed from the Udesly plugin settings.**

## Related Products

They are products with same category or tag of the current product

It must be inserted on a Collection List Wrapper and it's the list of related products. You can't enable pagination but you can control the number of products from Udesly > Settings > WooCommerce

Add the attribute on the Collection List Wrappers

> wc=related

Inside the Collection List Item, you can use all the elements you can find [here](#product-elements).

**The number of related can be managed from the Udesly plugin settings.**


## Product Elements

These elements below can be used inside:

[**Upsells**](#upsells)

[**Cross Sells**](#cross-sells)

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

    This is the product price, 

    Insert a Text element and add the attribute:

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