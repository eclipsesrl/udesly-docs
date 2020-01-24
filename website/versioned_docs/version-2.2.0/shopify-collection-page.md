---
id: version-2.2.0-shopify-collection-page
title: Collection Page
original_id: shopify-collection-page
---

This section will show how to setup and manage the single Collection page and the whole range of items you can insert in it.

![](assets/shopify-single-collection.png)

These items can be used only in the page set as **Collection page**.
Collection page must have the following attribute entered on the body:

> page=collection

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-shopify-elements). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, you can start from scratch, following the guide below.

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

These elements must be set on a Collection List wrapper and can be paginated. Limit will be set on *Shopify -> Online Store > Themes > Customize* Collection list wrapper must have this attribute:

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

   > [dimension={dimension}](shopify-optional-filters#dimension)

   > [scale={scale}](shopify-optional-filters#scale)

   > [format={format}](shopify-optional-filters#format)

   > [crop={crop}](shopify-optional-filters#crop)

   *For further info on how to set these optional attributes, please take a look on this [document](shopify-optional-filters)*

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

## Product Image
You can select one image amongst additional images of your product. It can be set on an Image, Div with this attribute:

   > item=product-image

   > index={index of the image}


## Different templates 

To give different templates to specific Collection pages, the body of these pages must contain the following attribute:

> page=collection-template

![](assets/shopify-different-collection.png)

**Once in Shopify, remember to select the corresponding template from the template selector.**

![](assets/shopify-template-selector.png)

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