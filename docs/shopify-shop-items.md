---
id: shopify-shop-items
title: Shop Items
---

This guide want to elaborate on settings of all the elements related to shopping functionalities.

## Misc Elements

Attributes you can add on Link elements:

> shop=checkout-link
>
> shop=cart-link
>
> collection-link={collection handle}
>
> product-link={product handle}

Attributes you can add on Text elements:

> shop=carts-count


## Shop Page elements

Elements below can be added only in page set as Collection page. This page automatically get the following attribute on the body:

> page=collection or page=detail_category

#### Collection Title

On Text element:

> shop=collection-title

#### Collection Description

On Text element:

> shop=collection-description

#### Collection Type

On Text element

> shop=collection-type

#### Collection Vendor

On Text element

> shop=collection-vendor

#### Collection Image

On Img or Div:

> shop=collection-image

#### Archive Products

It must be inserted on a Collection List Wrapper and it's the list of archive products. To enable pagination just add the pagination to the collection and you can control the number of products from *shopify -> customize theme*

The attribute to enter is:

> shop=archive-products

All the elements you can add in the Collection Item are available here (product-items)

#### Shop Tags

It can be added only in a page set a Collection page (attribute **page=collection** on the body).

This element returns all tags in the shop. Similar to **all_tags** but it only returns tags of products that are in the filtered view.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> shop=tags


#### Shop All Tags

It can be added only in a page set a Collection page (attribute **page=collection** on the body).

It returns all tags of all products of your shop. This includes tags of products that are not in the current pagination view.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> shop=all-tags


#### Shop Types
It can be added only in a page set a Collection page (attribute **page=collection** on the body).

It returns aòll types of a collection.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> shop=types


#### Shop vendors
It can be added only in a page set a Collection page (attribute **page=collection** on the body).

It returns all vendors of a collection.

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

The link element must have this attribute: 

> shop=vendors


## Mini Cart

Webflow native mini cart needs this attribute:

> shop=mini-cart

Hide the native Collection List inside it and replace it with another one. It must have the attribute:

> item=products-list

#### Mini Cart Title

Inside the Collection List item on a Text element:

> item=title

#### Mini Cart Vendor

Inside the Collection List item on a Text element:

> item=vendor

#### Mini Cart Price

Inside the Collection List item on a Text element:

> item=price

#### Mini Cart Total

Inside the Collection List item on a Text element:

> item=total

#### Mini Cart Quantity

Inside the Collection List item on a Text element:

> item=quantity

#### Mini Cart Link

Inside the Collection List item on a Link element:

> item=link

#### Mini Cart Remove

Inside the Collection List item on a Link element:

> item=remove

#### Mini Cart Featured Image

Inside the Collection List item on a img or Div element:

> item=featured-image


## Cart Page

It can be added only in a page set a Cart page (attribute **page=cart** on the body).

Insert a Form block with the following fields:

- 1 submit with the attribute:
  > item=checkout
- 1 submit with the attribute:
  > item=update

The Form block needs 2 Text elements with these attributes, respectively:

> item=cart-total
>
> item=cart-discounts

It also need a Collection Lists Wrapper inside which you can insert:

#### Title

On Text element:

> item=title

#### Vendor

On Text element:

> item=vendor

#### Price

On Text element:

> item=price

#### Total

On Text element:

> item=total

#### Properties

On Text element:

> item=properties

#### Variant

On Text element:

> item=variant

#### Original Price

On Text element:

> item=original-price

#### Quantity

> item=quantity (it can be entered on a type number input as well)

#### Link

On Link element:

> item=link

#### Remove

On Link element:

> item=remove 

#### Featured Image

On img or Div element:

> item=featured-image


## Products List

It can be used everywhere. The attribute must be set on a Collection lists wrapper, no pagination.

> shop:products={your shop setting name}

This element will create a Collection picker setting where your customer will be able to choose a Collection and how many articles to show.

To see what you can set inside shop cards see shop-items.md


## Recommended

It can be added only in a page set a Product page (attribute **page=product** on the body).

Insert a Collection List wrapper with the attribute:

> shop=recommended

Inside the Collection item you can only put limited fields:

> item=title
>
> featured-image
>
> link
>
> vendor
>
> price
>
> type

## Shop Notifications

It can be entered only once in the project, if not set fallback to default notifications style.

#### Notification Success

On a Div:

> shop=notification-success

The Div must contain a Text element with:

> item=message

its adviced to set transition for opacity on the Div for animation and set it as **Position fixed**

#### Notification Error

on a Div:

> shop=notification-error

The Div must contain a Text element with:

> item=message

its adviced to set transition for opacity on the div for animation and set it as **Position fixed**