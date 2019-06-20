---
id: shopify-conditional-items
title: Conditional Items
---

This kind of attribute can be used on every element to show or hide it, based on specific conditions.

> show-if={condition}

It shows the item if the specific condition is met.

> hide-if={condition}

It hides the item if the specific condition is met.


#### Logged In

Add the following attribute:

> show-if=logged-in


#### Gift Card conditions

These conditional attributes can be used only on **Gift Card** page 

Gift card is expired:

> show-if=gift-card-expired

Gift card is active:

> show-if=gift-card-active

Gift card has been used:

> show-if=gift-card-used

Gift card enabled:

> show-if=gift-card-enabled


#### Orders 

These conditional attribute should be used on **Account** page where you can set the orders list of the user.

> show-if=has-orders


#### Cart

cart is not empty:

> show-if=has-items-in-cart

cart is empty:

> show-if=cart-empty


#### Product

this condition can be used on The **Single Product** page.

Has related products:

> show-if=has-related-products


#### Order

These conditions can be used on **Order** page 

Order cancelled:

> show-if=order-cancelled

Order Item fulfilled:

> show-if=order-item-fulfilled

Order Item has tracking url:

> show-if=order-item-tracking-url



