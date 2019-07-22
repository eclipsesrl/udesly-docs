---
id: woocommerce-my-account-page
title: My Account Page
---

WooCommerce My Account page makes the most of account management. 

Insert a **Div** element with the attribute:

> wc=my-account

Inside it, insert a **Button**. It will be repeated according to My Account's number of endpoints (if put in a list item, it will be the latter to repeat itself).

In the Div, add also a **Richtext** element that will contain the content of My Account's tab and a **Form** with an input type text label and a submit for the form style. 








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