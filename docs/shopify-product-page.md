---
id: shopify-product-page
title: Product Page
---

These items can be used only in the page set as **Product page**.
Product page must have the following attribute entered on the body:

> page=product


## Title
It's the title of the product and can be added to any text element, will also add the link if set on a link text.
Insert the attribute:

> item=title

## Featured Image
It's the featured image of the product. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
Insert the attribute:

> item=featured-image

To handle featured image settings, there are several optional attributes you can use.

> [dimension={dimension}](shopify-optional-filters#dimension)

> [scale={scale}](shopify-optional-filters#scale)

> [format={format}](shopify-optional-filters#format)

> [crop={crop}](shopify-optional-filters#crop)

*For further info on how to set these optional attributes, please take a look on this [document](shopify-optional-filters)*

## Price
It is the product price. Insert a text element and enter the attribute:

> item=price

## Compare Price
It shows up only if the product is on sale, and is the original price, usually should have line-through. Insert a text item and add the attribute:

> item=compare-price

## Link
It's the link to the product and can be added to any a element. Insert the attribute:

> item=link

## Description
It's the product description and can be added to any text element.
Insert the attribute:

> item=description

## Vendor
If you want to display the vendor's name of that specific product, insert any text element and add the attribute:

> item=vendor

## Type
It's the product type. Insert any text element and add the attribute:

> item=type

## On Sale
Insert the element you wish. It will only appear when a product is on sale (a Div Block with a text, for example). Insert the attribute:

> item=on-sale

## Sold Out
Insert the element you wish. It will only appear when a product is sold-out (a Div Block with a text, for example). Insert the attribute:

> item=sold-out

## Collections
Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated. Insert the attribute:

>item=collections

## Tags
It shows tags of the product and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
Insert he attribute:

>item=tags

## Product Images
It can be set on an Image, Div, Slider, Lightbox and on a Lightbox contained in a Collection List item. It will be repeated 1 time for image set.

> item=product-images

## Add to Cart
Webflow Add of cart gets automatically converted. Use the default Add to cart and enter these elements inside it:

- A Text element with

  > item=option-title

  Option quantity must be enabled, even if hidden by style.


- A Div element with 

  > item=option-wrapper

  and inside it 

   1 label with

   > item=option

   1 label with

   > item=color

You can stylize these label with combo class **"selected"** to define when the variation is selected and with combo class **"soldout"** when the variation is soldout.


### Recommended


Insert a Collection List wrapper with the attribute:

> shop=recommended

Inside the Collection item you can only put limited fields:

- ### Title
   It's the title of the product and can be added to any text element, will also add the link if set on a link text.
   Insert the attribute:

   > item=title

- ### Price
   It is the product price. Insert a text element and enter the attribute:

   > item=price

- ### Link
   It's the link to the product and can be added to any a element. Insert the attribute:

   > item=link

- ### Vendor
   If you want to display the vendor's name of that specific product, insert any text element and add the attribute:

   > item=vendor

- ### Type
   It's the product type. Insert any text element and add the attribute:

   > item=type

- ### Featured Image
   It's the featured image of the product. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
   Insert the attribute:

   > item=featured-image