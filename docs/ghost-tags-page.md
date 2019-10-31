---
id: ghost-tags-page
title: Tags Page
---

This is the list of all tags. 

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Insert a Collection List Wrapper element and add the attribute:

> tags=all

*The following list includes all elements you can enter within this Collection List.*

## ID
> item=id

This is the incremental ID of the tag

## Name
> item=name

This is the name of the tag

## Description
> item=description

This is the description of the tag

## Featured Image
> item=featured-image

This is the featured image of the tag

## Meta Title
> item=meta-title

This is the tag's meta title

## Meta Description
> item=meta-description

This is the tag's meta description

## Url
> item=url

This is the web address for the tag's page. 


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