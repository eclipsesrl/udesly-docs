---
id: lost-reset-password
title: Lost and Reset Password
---

Lost Password and Reset Password forms must be inserted in the same page.

## Lost Password Form

To create a Lost Password Form insert a **Form Block** and add the attribute:

> login-area=lost-password

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 |            | Plain | REQUIRED
  |                         | submit |

Select the form and change the status to **Error**
Select the error message text block and insert the attribute:

> item=error-message

This way the error message text will be replaced with the right message automatically.


## Reset Password Form

To create a Reset Password insert a **Form Block** and add the attribute:

> login-area=reset-password

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 | password           | Password | REQUIRED
 | password_repeat | Password | REQUIRED
 |                         | submit |

Select the form and change the status to Error
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
