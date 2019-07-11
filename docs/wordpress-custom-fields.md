---
id: wordpress-custom-fields
title: Custom Fields
---

We added the possibility to use Custom Fields with Udesly. Everywhere on your template and every element you’re working with, can be made dynamic.

Insert the attribute:

> custom-field={custom field slug}

By default Custom Field content is the text of the element but if you insert also the optional attribute:

> attribute={any html attribute such as href, src, etc.}

the Custom Field content will become the value of that attribute.