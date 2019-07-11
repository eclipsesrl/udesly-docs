---
id: shopify-pages-structure
title: Pages Structure
---

The first step in building a Shopify theme is to create several pages, each serving a unique purpose. Shopify itself necessary involves pages without which the very concept of Shopify template would to come to an end.
We'll see in this documentation what these pages are and what kind of purpose they serve.

The following step, thus, involves the acknowledgment of the page type, as very significant as easy shift in the conversion process.

## Mandatory Pages

> Index
>
> Cart
>
> Blog
>
> Default
>
> Collection
> 
> Product

## All Pages
With the Adapter 2.0 you decide the page type in Webflow through some attributes on body (but it's automatic in almost all pages, it's necessary only for cms pages and even not in all of them):

**index =>** no attribute

**404 =>** no attribute

**401 =>** no attribute

**checkout, order confirmation and detail_sku =>** automatically removed because not exportable by Webflow

**search =>** no attribute

**detail_product =>** it automatically takes the attribute: page=product

**detail_category =>** it automatically takes the attribute: page=collection

**detail_article || detail_post =>** It automatically takes the attribute: page=article

All page without attribute that are not CMS related automatically takes the attribute: page=template.

The list below indicates all the attributes you can use to define the page type, by inserting them in the body of the Webflow page:

> page=template
>
> page=default   => it's the default page used for new pages created in Shopify
>
> page=cart
>
> page = remove => do not convert
>
> page=article
>
> page=product
>
> page=blog
>
> page=collection
>
> page=list-collections
>
> page=account
>
> page=activate (page where you activate the account)
>
> page=login
>
> page=register
>
> page=reset-password
>
> page=order
>
> page=addresses
>
> page=gift-card

## Page Links
Some pages cannot be linked directly from Webflow because they are dymanic:

> collection
>
> product


If you want to link a specific **Collection** use the attribute:

> collection-link={handle}


To link the **Product page** use the attribute:

> product-link={handle}


Let us pause on how to link a **Template page.** It is automatically linked if its handle on Webflow matches with the corresponded handle on Shopify. Otherwise you need to insert this attribute:

> page-link={handle}

**Don't forget that Template pages must be created in Shopify!**

Other pages are not linkable at all because they are dynamic or accesible only from email link::

> article
>
> search
>
> activate
>
> gift-card
>
> reset-password
>
> default-page
