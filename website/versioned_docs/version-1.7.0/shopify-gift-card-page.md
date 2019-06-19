---
id: version-1.7.0-gift-card-page
title: Gift Card Page
original_id: gift-card-page
---

This template renders the gift card issued to a customer upon purchase. The URL to the gift card template is found in email notifications sent to the customer when a gift card is purchased.
Within the gift card template, you can use the gift card object’s attributes to display a gift card’s details.

## Disabled Gift Card
Insert a **Div Block** and assign the following attributes:

> shopify=conditional
>
> el=gift-card-enabled
>
> udesly-data=false

In this way the template you have created for when the Gift Card is disabled will appear.

## Expired Gift Card
Insert a **Div Block** and assign the following attributes:

> shopify=conditional
> 
> el=gift-card-expired

## Active Gift Card
Insert a **Div Block** and assign the following attributes:

> shopify=conditional
>
> el=gift-card-active

## Gift Card Code
Insert a **Div Block** and assign the following attributes:

> shopify=gift-card
>
> el=code

## Gift Card Image
Insert an **Image** item and assign the following attributes:

> shopify=gift-card
>
> el=image

## Gift Card Qr Code
Insert a **Text Block** and assign the following attributes:

> shopify=gift-card
>
> el=qr-code

## Gift Card Initial Value
Insert a **Div Block** and assign the following attributes:

> shopify=gift-card
>
> el=initial-value

## Gift Card Current Value
Insert a **Div Block** and assign the following attributes:

> shopify=gift-card
>
> el=current-value
