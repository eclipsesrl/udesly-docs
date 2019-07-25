---
id: wordpress-login-form
title: Login Form
---

A Login form is used to enter authentication credentials to access a restricted page or form. 

![](assets/wordpress-login-form.png)

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.


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
