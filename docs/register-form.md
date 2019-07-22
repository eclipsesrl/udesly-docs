---
id: register-form
title: Register Form
---

Insert a **Form** element inside your page and insert the following attributes:

> login-area=register

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 | first_name           | Plain |
 | last_name | Plain |
 | username | Plain | REQUIRED
 | email | Email | REQUIRED
 | password | Password | REQUIRED
 | password_repeat | Password | REQUIRED
 |                         | submit |


Select the form and change the status to **Error**
Select the error message text block and insert the attribute:

> item=error-message

In this way the error message text will be replaced with the right message automatically.


**Logged in** users should not be able to see the page where you insert this form. To this purpose it would be preferable to wrap this logout element in a div with attribute:

> hide-if=logged-in



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
 