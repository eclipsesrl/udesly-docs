---
id: shopify-menu
title: Menu
---
You can design a dynamic menu in Webflow and insert it anywhere in your Shopify site. 

![](assets/shopify-menu.png)

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.

Otherwise, if you want to start from scratch, insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

Add the following attribute to the list item:

> menu={your menu handle}

You can find your menu handle following the path *Shopify > Online Store > Navigation > "Your menu"*



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