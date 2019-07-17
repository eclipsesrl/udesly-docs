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

If you're using Gutenberg, create a new Box or use an already present Dynamic Box and click on "Add gallery" button. Populate the gallery with your images and it's done.

If you're not using Gutenberg, create a new Box or use an already present Dynamic Box and click on "Add media" button and then on "Create gallery". Populate the gallery with your images and it's done.

## Dynamic Lightbox
To build a Dynamic Lightbox, you can use a Lightbox link or a Lightbox link contained in a Collection List item.

In the first case the Thumbnail (that's the one you create in Webflow) will be clickable and, by clicking on it, the entire gallery will be navigable. 

In the second case (a Lightbox link contained in a Collection List item), all the images of the gallery will be automatically displayed and, by clicking on them, a lightbox will open with all images connected with each other.

In any case, the attribute to insert on the Lightbox link element is:

> boxes:lightbox={slug of the box}

**Don't forget to add a Gallery inside the box**

Let's see how to manage images on WordPress.

If you're using Gutenberg, create a new Box or use an already present Dynamic Box and click on "Add gallery" button. Populate the gallery with your images and it's done.

If you're not using Gutenberg, create a new Box or use an already present Dynamic Box and click on "Add media" button and then on "Create gallery". Populate the gallery with your images and it's done.

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