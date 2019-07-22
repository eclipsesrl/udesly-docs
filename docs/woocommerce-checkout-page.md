---
id: woocommerce-checkout-page
title: Checkout Page
---

WooCommerce Checkout page shows information such as shipping and payment options.

Insert the following attribute on the default Webflow checkout:

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