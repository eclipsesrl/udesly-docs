---
id: version-2.0-woocommerce-checkout-page
title: Checkout Page
original_id: woocommerce-checkout-page
---

WooCommerce Checkout page shows information such as shipping and payment options. This page does not require any attribute in the body.

![](assets/checkout-page.png)

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Insert the following attribute on the *container* of the Webflow checkout:

![](assets/checkout-container.png)

> wc=checkout


As WooCommerce uses a completely different structure, only the classes will be exported, so this page on WooCommerce could be a little bit different than the Webflow one. Anyway the most of your style will be exported.

**Remember to go to *woocommerce > settings > advanced* and set the Checkout page you created in Webflow as *Checkout page*.

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