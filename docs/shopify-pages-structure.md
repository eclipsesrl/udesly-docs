---
id: shopify-pages-structure
title: Pages Structure
---

The first step in building a Shopify theme is to create several pages, each serving a unique purpose. Shopify itself necessary involves pages without which the very concept of Shopify template would to come to an end.
We'll see in this documentation what these pages are and what kind of purpose they serve.

The following step, thus, involves the acknowledgment of the page type, as very significant as easy shift in the conversion process.

## Mandatory Pages
The first step in building a theme for Shopify is to create several pages, each serving their own unique purpose. All of them are required to have a well-functioning Shopify theme.
They are totally customizable and you can add more but the following are essential.
They are:

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
You can't link directly from webflow to page set as:

> article
>
> search
>
> collection
>
> activate
>
> gift-card
>
> product
>
> reset-password
>
> default-page

because they are either dynamic or accessible only from email link.

To link the template pages you need to insert this attribute:

> page-link={handle}

If you want to link a specific collection use the attribute:

> collection-link={handle}

Finally, to link the product page use the attribute:

> product-link={handle}

