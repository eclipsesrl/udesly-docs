---
id: wordpress-shortcode
title: Shortcodes
---

A shortcode is a WordPress-specific code that lets you do nifty things with very little effort. Shortcodes can embed files or create objects that would normally require lots of complicated, ugly code in just one line. It make you able to use the most of WordPress plugins.

Insert a **Text Block** and enter this attribute:

> shortcode={anything you want}

**E.g.** we want to create a Contact Form using the Contact Form 7 plugin.

What we have to do is to insert the shortcode released by the plugin itself in a Text Block and add the attribute above.

![](assets/shortcode.png)

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