---
id: login-form
title: Login Form
---

Insert a **Form** element inside your page and insert the following attributes:

> login-area=login

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 | username           | Plain | REQUIRED
 | password | Password | REQUIRED
 | remember_me | Checkbox
 |                         | submit |

Select the form and change the status to **Error**

Select the error message text block and insert the attribute:

> item=error-message

This way the error message text will be replaced with the right message automatically.


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
