---
id: shopify-reset
title: Reset Password Page
---

This short guide is focused on how to configure the “Reset password” page in Webflow to get it ready to be converted to Shopify by the Adapter. 

![](assets/shopify-reset-password.png)

As first you need to define the page type adding the following custom attribute to the Body element of the page:

>page=reset-password

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

Check this [link](https://help.shopify.com/en/manual/checkout-settings/customer-accounts) to see how to enable accounts on Shopify.

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-shopify-elements). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, you can start from scratch, following the steps below.

Add a form to this page: select a Form block from the “Add panel” in Webflow *(Add panel > Elements > Forms section)* and add the attribute:

> account=reset

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 | password           | password |
 | password_confirmation | password |
 |                         | submit |

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