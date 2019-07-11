---
id: lost-reset-password
title: Lost and Reset Password
---

Lost Password and Reset Password forms must be inserted in the same page.

## Lost Password Form

To create a Lost Password Form insert a **Form Block** and add the attribute:

> login-area=lost-password

The form must have the following fields:

- Type = Plain **Required**

- Type = Submit

Select the form and change the status to **Error**
Select the error message text block and insert the attribute:

> item=error-message

This way the error message text will be replaced with the right message automatically.


## Reset Password Form

To create a Reset Password insert a **Form Block** and add the attribute:

> login-area=reset-password

The form must have the following fields:

- Type = Password Name=password **Required**

- Type = Password Name=password_repeat **Required**

- Type = Submit

Select the form and change the status to Error
Select the error message text block and insert the attribute:

> item=error-message

This way the error message text will be replaced with the right message automatically.
