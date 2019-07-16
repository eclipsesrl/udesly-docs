---
id: shopify-activate
title: Activate Account Page
---

Discover how to configure the "activate account" page in Webflow to get it ready to be converted to Shopify by the Adapter. 

As first you need to define the page type adding the custom attribute below to the Body element of the page:

> page=activate

Add a form to this page: select a Form block from the “Add panel” in Webflow *(Add panel > Elements > Forms section)* and add the attribute:

> account=activate

It needs the following input fields:

 **Name**             | **Type** | 
 -------------        | --------------- |
 | password           | password |
 | password_confirmation | password |
 |                        | submit |
 |                         | submit |

 On one of the submit you have to add the attribute 

 > item=decline


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