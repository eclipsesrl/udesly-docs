---
id: ghost-conditional
title: Conditional Items
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


## Member

Add the following attribute:

> show-if=member


## Paid Member

> show-if=pain-member


## Has Access 

> show-if=has-access

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