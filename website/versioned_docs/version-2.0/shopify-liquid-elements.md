---
id: version-2.0-shopify-liquid-elements
title: Liquid Elements
original_id: shopify-liquid-elements
---

Liquid elements are advanced elements that can help you to achieve custom functionalities without modifying directly the exported theme. They can be used in all the theme and are meant for advanced users who knows how liquid templating works.

## If

> liquid:if={expression}

It wraps the element inside the condition.

## For

> liquid:for={expression}

It wraps the elements inside a for cycle.

## Unless

> liquid:unless={expression}

It wraps the element inside an unless.

## object

> liquid:object={expression}

Option:
> where={html attribute}

It sets the content of the element to object if `where` attribute is not set, otherwise will set the object inside the html attribute defined with the `where` attribute.

## tag

> liquid:tag={expression}

It sets the content of the element to {% expression %}



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