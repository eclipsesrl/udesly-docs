---
id: version-1.7.0-lost-reset-password
title: Lost and Reset Password
original_id: lost-reset-password
---

## How to create Lost and Reset Password Forms

Lost Password and Reset Password forms must be inserted in the same page.

![](assets/lost-reset.png)

#### Lost Password Form

To create a Lost Password Form follow these steps:

1) Insert a **Div** element

2) Assign these attributes to the div:

> wp= conditional
> 
> el=lost-password

3) Insert a **Form** inside the div

4) Select the form block you created from the navigator

5) Insert these attributes:

> wp=login-area
>
> el=lost-password

6) The form must have the following fields:

- Type = Plain **Required**

- Type = Submit

7) Select the form and change the status to **Error**

8) Select the error message text block and insert the attribute

> udesly-data=error-message

This way the error message text will be replaced with the right message automatically.


#### Reset Password Form

To create a Reset Password Form follow these steps:

1) Insert a **Div** element

2) Assign these attributes to the div:

> wp= conditional
> 
> el=reset-password

3) Insert a Form inside the div

4) Select the form block you created from the navigator

5) Insert these attributes:

> wp=login-area
>
> el=reset-password

6) The form must have the following fields:

- Type = Password Name=password **Required**

- Type = Password Name=password_repeat **Required**

- Type = Submit

7) Select the form and change the status to Error

8) Select the error message text block and insert the attribute:

> udesly-data=error-message

This way the error message text will be replaced with the right message automatically.

<iframe width="700" height="419" src="https://www.youtube.com/embed/DOeDgmcS8CA?list=PLLChkVtVa_ZuGrgLVMEIl0nliPjljc4gm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>