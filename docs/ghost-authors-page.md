---
id: ghost-authors-page
title: Authors Page
---

This is the list of all Authors.



> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Insert a Collection List Wrapper and add the following attribute:

> authors=all

*The following list includes all elements you can enter within this page.*

## ID
> item=id

This is the incremental ID of the author

## Name
> item=name

This is the name of the author

## Bio
> item=bio

This is the bio of the author

## Location
> item=location 

This is the location of the author

## Profile Image
> item=profile-image

This is the profile image for the author

## Cover Image
> item=cover-image

This is the cover image for the author

## Meta Title
> item=meta-title

This is the author's meta title

## Meta Description
> item=meta-description

This is the author's meta description

## Twitter
> item=twitter

This is the author's twitter username

## Facebook
> item=facebook

This is the author's facebook username

## Website
> item=website

This is the website of the author

## Url
> item=url

This is the web address for the author's page. 


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