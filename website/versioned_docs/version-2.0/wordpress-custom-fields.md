---
id: version-2.0-wordpress-custom-fields
title: Custom Fields
original_id: wordpress-custom-fields
---

Custom fields, also referred to as post meta, is a feature in WordPress which allows users to add additional information when writing a post.

![](assets/wordpress-custom-fields.png)

We added the possibility to use Custom Fields with your Webflow template. Everywhere on your template and every element you’re working with, can be made dynamic.

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

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