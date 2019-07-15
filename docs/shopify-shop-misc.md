---
id: shopify-shop-misc
title: Misc Items
---

These elements can be added on all pages of your Website

## Checkout Link

On links and button you can use the following attribute to link to the checkout:

> shop=checkout-link

## Cart Link

On links and button you can use the following attribute to link to the cart:

> shop=cart-link


## Collection Link

On links and button you can use the following attribute to link to a collection of your shop:

> collection-link={collection handle}

e.g: collection-link=shoes will link to a collection with handle shoes


## Product Link

On links and button you can use the following attribute to link to a product of your shop:

> product-link={product handle}

e.g: product-link=blue-shoes will link to a Product with handle blue-shoes


## Cart Count

The number of items in the Cart

> shop=carts-count


## Mini Cart

Use Webflow native mini cart needs this attribute:

> shop=mini-cart

Hide the native Collection List inside it (it's not exported as HTML) and replace it with a simple List with the attribute:

> item=products-list

Inside the List Item you can insert the following elements: 

- ### Title

    On text elements you can add the following attribute to get the Product Title:

    > item=title

- ### Vendor

    On text elements you can add the following attribute to get the Product Vendor:

    > item=vendor

- ### Price

    On text elements you can add the following attribute to get the Product Price:

    > item=price

- ### Total

   On text elements you can add the following attribute to get the Product Total Price:

    > item=total

- ### Quantity

    On text elements you can add the following attribute to get the Product quantity:

    > item=quantity

- ### Link

    On link elements you can add the following attribute to get the Product Link:

    > item=link

- ### Remove

    On link elements you can add the following attribute to add the functionality of removing the Product from the cart:

    > item=remove

- ### Featured Image

    On image or div elements you can add the following attribute to get the Product Featured Image:

    > item=featured-image



## Products List

It can be used everywhere. The attribute must be set on a Collection lists wrapper, no pagination.

> shop:products={your shop setting name}

This element will create a Collection picker setting where your customer will be able to choose a Collection and how many products to show.

Inside Collection item you can use the following attributes:

- ### Title
   It's the title of the product and can be added to any text element, will also add the link if set on a link text.
   Insert the attribute:

   > item=title

- ### Featured Image
   It's the featured image of the product. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
   Insert the attribute:

   > item=featured-image

   To handle featured image settings, there are several optional attributes you can use.

   > dimension={dimension}

   > scale={scale}

   > format={format}

   > crop={crop}

- ### Price
   It is the product price. Insert a text element and enter the attribute:

   > item=price

- ### Compare Price
   It shows up only if the product is on sale, and is the original price, usually should have line-through. Insert a text item and add the attribute:

   > item=compare-price

- ### Link
   It's the link to the product and can be added to any a element. Insert the attribute:

   > item=link

- ### Description
   It's the product description and can be added to any text element.
   Insert the attribute:

   > item=description

- ### Vendor
   If you want to display the vendor's name of that specific product, insert any text element and add the attribute, you can also add it on link elements:

   > item=vendor

- ### Type
   It's the product type. Insert any text element and add the attribute:

   > item=type

- ### On Sale
   Insert the element you wish. It will only appear when a product is on sale (a Div Block with a text, for example). Insert the attribute:

   > item=on-sale

- ### Sold-out
   Insert the element you wish. It will only appear when a product is sold-out (a Div Block with a text, for example). Insert the attribute:

   > item=sold-out

- ### Collections
   Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated. Insert the attribute:

   >item=collections

- ### Tags
   It shows tags of the product and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
   Insert he attribute:

   >item=tags

- ### Add to Cart
   No need for attributes, use the Add to Cart of Webflow


## Shop Notifications

It can be entered only once in the project, if not set it will fallback to unstyled notifications.

There can be two notification types: 

- ### Notification Success

    On a Div add the attribute:

    > shop=notification-success

    The Div must contain a Text element with:

    > item=message

- ### Notification Error

  On a Div add the attribute:

    > shop=notification-error

    The Div must contain a Text element with:

    > item=message


its adviced to set transition for opacity on the div for animation and set it as **Position fixed**