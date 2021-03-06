---
id: version-2.0.0-shopify-collections-list
title: Collections List Page
original_id: shopify-collections-list
---

This page will show all the collections available in your Shopify store.

![](assets/shopify-collections-list.png)

These items can be used only in the page set as **Collections List page**.
Collections List page must have the following attribute entered on the body:

> page=list-collections

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-shopify-elements). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, you can start from scratch, following the guide below.

## Collections

These elements must be set on a Collection List wrapper and can be paginated. Limit will be set on *Shopify -> Online Store > Themes > Customize* Collection list wrapper must have this attribute:

> shop=collections

This is the list of all collections of your shop.

Inside Collection item you can use the following attributes:

- ### Description

   On Text elements:

   > item=description

- ### Title

   On Text or Link:

   > item=title

- ### Products Count 

   On Text elements:

   > item=products-count

- ### Featured Image

   On Div, Link or img elements:

   > item=featured-image

   To handle featured image settings, there are several optional attributes you can use.

   > [dimension={dimension}](shopify-optional-filters#dimension)

   > [scale={scale}](shopify-optional-filters#scale)

   > [format={format}](shopify-optional-filters#format)

   > [crop={crop}](shopify-optional-filters#crop)

   *For further info on how to set these optional attributes, please take a look on this [document](shopify-optional-filters)*



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