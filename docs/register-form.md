---
id: register-form
title: Register Form
---

Insert a **Form** element inside your page and insert the following attributes:

> login-area=register

The form must have the following fields:

- Type = Plain Name = first_name

- Type = Plain Name = last_name

- Type = Plain Name = username       Required

- Type = Email Name = email              Required

- Type = Password Name = password                 Required

- Type = Password Name = password_repeat   Required

- Type = Submit
 

Select the form and change the status to **Error**
Select the error message text block and insert the attribute:

> item=error-message

In this way the error message text will be replaced with the right message automatically.


**Logged in** users should not be able to see the page where you insert this form. To this purpose it would be preferable to wrap this logout element in a div with attribute:

> hide-if=logged-in
 