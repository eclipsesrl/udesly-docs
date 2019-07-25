---
id: version-2.0.0-woocommerce-my-account-page
title: My Account Page
original_id: woocommerce-my-account-page
---

WooCommerce My Account page makes the most of account management. This page does not require any attribute in the body.

![](assets/my-account.png)

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

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