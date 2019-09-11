---
id: version-2.0.0-shopify-page-items
title: Template and Default Pages Items
original_id: shopify-page-items
---

The following elements can be added to page set as **Template page** or **Default page template**. 

To define a page as *Default page* add the following attribute on the Body element:

> page=default

<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>

All pages without attribute that are not CMS related are automatically recognized as **Template**.

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-shopify-elements). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, you can start from scratch following the guide below.

#### Title

This is the page title. Insert a text item and add the attribute:

> item=title


#### Description

This is the page description. Insert a text item and add the attribute:

> item=description


#### Date

This is the page publishing date. Insert a text item and add the attribute:

> item=date

To handle the date format, you can use the following optional attribute:

> [format={date-format}](shopify-optional-filters#date-format)

*For further info on how to set this optional attribute, please take a look on this [document](shopify-optional-filters)*

#### Content

This is the page content. Insert a richtext item and add the attribute.

> item=content


**IMPORTANT**

You have to create these pages in Shopify and match them with the appropriate template, using the template selector.
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