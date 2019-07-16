---
id: wordpress-boxes
title: Boxes
---

With Boxes you can add dynamic contents into your Webflow project and revise them directly from the WordPress admin panel. Any time you create a box, you’ll find a correlate shortcode.

## Dynamic Slider
You can now use the Webflow Slider and manage images directly from WordPress, through the Boxes feature.

Insert a Slider item into your Webflow project and add this attributes:

> boxes:slider={slug of the box}

**Don't forget to add a Gallery inside the box**

Let's see how to manage images on WordPress.

If you are using Guthemberg
Create a new Box or use an already present Dynamic Box, insert a title and click on "Add gallery" button. Populate the gallery with your images and it's done.




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