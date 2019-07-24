---
id: version-2.0.0-shopify-gift-card
title: Gift Card
original_id: shopify-gift-card
---

A gift card is a special type of product. Its value can be used as payment toward future orders from your online store. Follow this guide to design this page in Webflow and convert it to Shopify.

![](assets/shopify-gift-card.png)

The following elements can be added only in the page set as **Gift Card**.
Gift Card page must have the following attribute entered on the body:

> page=gift-card

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, you can start from scratch, following the guide below.


## Expiration Date

This is the expiration date of the card. Insert a Text item and add the following attribute:

> gift-card=expiration-date

To handle the date format, you can use the following optional attribute:

> [format={date-format}](shopify-optional-filters#date-format)

*For further info on how to set this optional attribute, please take a look on this [document](shopify-optional-filters)*

## Initial balance

This is the initial balance of the card. Insert a Text item and add the attribute:

> gift-card=initial-balance

## Code

It represents the gift card code. Insert a Text item and add the attribute:

> gift-card=code

## balance

This is the current balance of the card. Insert a Text item and add the attribute:

> gift-card=balance

## Qr code

This is the QR code of the card Insert a Text item and add the attribute:

> gift-card=qr-code

## Image

To insert the gift card image, insert a Image item or a Div with the attribute:

> gift-card=image

Don't forget that the Gift Card page can be further customized using conditional attributes to set up the different conditions in which the card can be found (used, active, expired, etc.). Check this guide.




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