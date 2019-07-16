---
id: shopify-register
title: Register Page
---

In this short guide we’re going to focus on how to configure the register page in Webflow to get it ready to be converted to Shopify by the Adapter. 

As first you need to define the page type adding the following custom attribute to the Body element of the page:

>page=register

Add a form to this page: select a Form block from the “Add panel” in Webflow *(Add panel > Elements > Forms section)* and add the attribute:

> account=register

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 | password           | password |
 | email | email |
 | first_name | plain |
 | last_name  | plain |
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