---
id: wordpress-menu   
title: Menu
---

You can insert a dynamic menu anywhere in your WordPress site. 

Insert a link element. This one will be repeated and if the link is inside a **List Item**, the whole List Item will be repeated.

Add the following attribute to the Link element:

> menu={your menu slug}


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