---
id: wordpress-php-elements   
title: PHP elements
---
PHP elements are advanced elements that can help you to achieve custom functionalities without modifying directly the exported theme. They can be used in all the theme and are meant for advanced users who knows how liquid templating works.

## If

> php:if={expression}

It wraps the element inside the condition.

## For

> php:for={expression}

It wraps the elements inside a for cycle.

## Foreach

> php:foreach={expression}

It wraps the element inside an foreach cycle.

## While

> php:while={expression}

It wraps the element inside an while cycle.

## Echo

> php:echo={expression}

It enables PHP echo function.

## PHP

> php={expression}

It's a generic PHP tag. 

Both Echo and PHP element can have an optional attribute:

> where={html attribute}

It sets the content of the element to the expression if `where` attribute is not set, otherwise will set the expression inside the html attribute defined with the `where` attribute.


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