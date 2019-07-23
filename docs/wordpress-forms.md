---
id: wordpress-forms
title: Forms
---

Webflow does no longer export Forms functionality, if not hosted on its server, but you can decide to use WordPress to manage them.

Forms will be sent via email to the admin.

Insert a **Form Block** element and customize it as you prefer.

Select the Form Block from the Navigator and insert this attribute:

> wordpress=form




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