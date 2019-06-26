---
id: shopify-gift-card
title: Gift Card 
---

The following elements can be added only in the page set as **Gift Card**.

#### Expiration Date

This is the expiration date of the card. Insert a Text item and add the following attribute:

> gift-card=expiration-date

To handle the date format, you can use the following optional attribute:

> format={date-format}

For date format type use [strfti.me](http://www.strfti.me/)

#### Initial balance

This is the initial balance of the card. Insert a Text item and add the attribute:

> gift-card=initial-balance

#### Code

It represents the gift card code. Insert a Text item and add the attribute:

> gift-card=code

#### balance

This is the current balance of the card. Insert a Text item and add the attribute:

> gift-card=balance

#### Qr code

This is the QR code of the card Insert a Text item and add the attribute:

> gift-card=qr-code

#### Image

To insert the gift card image, insert a Image item or a Div with the attribute:

> gift-card=image

Don't forget that the Gift Card page can be further customized using conditional attributes to set up the different conditions in which the card can be found (used, active, expired, etc.). Check this guide.