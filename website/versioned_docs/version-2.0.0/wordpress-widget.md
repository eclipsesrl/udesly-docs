---
id: version-2.0.0-wordpress-widget
title: Widgets
original_id: wordpress-widget
---
A WordPress Widget is a small block that performs a specific function. 

![](assets/wordpress-widgets.png)

To use WordPress widgets starting from your Webflow theme, you need to add the following attribute to a Div element:

> widget={your widget slug}

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