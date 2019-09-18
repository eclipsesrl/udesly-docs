---
id: version-2.0-woocommerce-my-account-page
title: My Account Page
original_id: woocommerce-my-account-page
---

WooCommerce My Account page makes the most of account management. This page does not require any attribute in the body.

![](assets/my-account.png)

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Insert a **Div** element with the attribute:

> wc=my-account

Inside it, insert a **Button**. The button will be automatically repeated with all My Account Menu voices. The content of each single tab will be added in place of the rich text. So, you only need to styles the left and the right column with your own style.

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