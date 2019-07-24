---
id: version-2.0.0-shopify-conditional-items
title: Conditional Items
original_id: shopify-conditional-items
---

This kind of attribute can be used on every element to show or hide it, based on specific conditions.

> show-if={condition}

It shows the item if the specific condition is met.
<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/conditional-shopify-show-if.webm">
</video>
</pre>

> hide-if={condition}

It hides the item if the specific condition is met.

<video autoplay muted playsinline="true" loop>
<source src="/assets/conditional-shopify-hide-if.webm">
</video>


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