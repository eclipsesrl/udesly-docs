---
id: shopify-collection-page
title: Collection Page
---

These items can be used only in the page set as **Collection page**.
Collection page must have the following attribute entered on the body:

> page=collection

## Collection Title

It's the current collection title, can be used on every text elements:

> shop=collection-title

## Collection Description

It's the current collection description, can be used on every text elements:

> shop=collection-description

## Collection Image

It's the current collection featured image, can be used on image or div elements

> shop=collection-image

## Collection Type

It's the current collection type, can be used on every text elements:

> shop=collection-type

## Collection Vendor

It's the current collection vendor, can be used on every text elements:

> shop=collection-vendor

## Archive Products

These elements must be set on a Collection List wrapper and can be paginated. Limit will be set on **Shopify --> Customize Theme.** Collection list wrapper must have this attribute:

> shop=archive-products

This is the list of all collections of your shop.

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



## Tags
   It shows tags of the collection in the current pagination and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
   Insert he attribute:

   >shop=tags

## All Tags
   It shows all tags of the collection and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
   Insert he attribute:

   >shop=all-tags

## Types
   It shows all types of the collection and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
   Insert he attribute:

   >shop=types

## Vendors
   It shows vendors of the collection and it must be added on a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.
   Insert he attribute:

   >shop=vendors