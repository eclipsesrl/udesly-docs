---
id: version-1.7.0-login-form
title: Login Form
original_id: login-form
---

## How to create a Login Form

![](assets/login-form.png)

Insert a **Form** element inside your page and insert the following attributes:

> wp=login-area
>
> el=login

The form must have the following fields:

1) Type = Plain  Name = username  Required
2) Type = Password  Name = password Required
3) Type = Checkbox  Name = remember_me
4) Type = Submit

Select the form and change the status to **Error**

Select the error message text block and insert the attribute

> udesly-data=error-message

This way the error message text will be replaced with the right message automatically.

<iframe width="700" height="419" src="https://www.youtube.com/embed/b3gg7WPXKYk?list=PLLChkVtVa_ZuGrgLVMEIl0nliPjljc4gm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Best practice

**Logged in** users should not be able to see the page where you insert this form.To this purpose follow these simple steps:

1) Create a **rule** within the Udesly Plugin with the attribute:

> Login Status  = Logged In

![](assets/login-form-1.png)

2) Select the page where you inserted the login form and set the rule you created before as **Redirect Rule**

![](assets/login-form-2.png)

3) Optionally you can also insert an url to redirect to. Don’t forget to insert the full path e.g: https://www.udesly.com, or leave it blank to redirect to your **Home Page**

 