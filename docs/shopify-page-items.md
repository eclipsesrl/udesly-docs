---
id: shopify-page-items
title: Template and Default Pages Items
---

The following elements can be added to page set as **Template page** or **Default page template**. 

To define a page as *Default page* add the following attribute on the Body element:

> page=default

All pages without attribute that are not CMS related are automatically recognized as **Template**.

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