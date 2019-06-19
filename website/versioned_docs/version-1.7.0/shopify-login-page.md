---
id: version-1.7.0-login-page
title: Login Page
original_id: login-page
---

The Login page is used by visitors to log in to their customer account page.
It consists in a **Login Form** and a **Lost Password Form**. 

## Login Form
Insert a **Form Block** and assign the following attributes:

> shopify=account
>
> el=login

The Form must have these fields with the specific input names indicated in the brackets (MANDATORY):

- Email Address (email)

![](assets/login1.png)

Password (password)

![](assets/login2.png)


## Lost Password Form
Insert a **Form Block** and assign the following attributes:

> shopify=account
>
> el=recover-password

The Form must have this field with the specific input name indicated in the brackets (MANDATORY):

- email address (email)

![](assets/login3.png)
