---
id: wordpress-custom-fields
title: Custom Fields
---

We added the possibility to use Custom Fields with your Webflow templater. Everywhere on your template and every element you’re working with, can be made dynamic.

Insert the attribute:

> custom-field={custom field slug}

By default Custom Field content is the text of the element but if you insert also the optional attribute:

> attribute={any html attribute such as href, src, etc.}

the Custom Field content will become the value of that attribute.



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