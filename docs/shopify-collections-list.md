---
id: shopify-collections-list
title: Collections List Page
---

These items can be used only in the page set as **Collections List page**.
Collections List page must have the following attribute entered on the body:

> page=list-collections

## Collections

These elements must be set on a Collection List wrapper and can be paginated. Limit will be set on **Shopify --> Customize Theme.** Collection list wrapper must have this attribute:

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

   > dimension={dimension}

   > scale={scale}

   > format={format}

   > crop={crop}
