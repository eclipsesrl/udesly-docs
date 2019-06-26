---
id: shopify-addresses
title: Addresses Page 
---

here you can modify or see user addresses


#### Login
This attribute can be entered in the Login page only. 
Insert a Form block and add the attribute:

> account=login

It needs specific type fields:
- 1 input name=password type=password
- 1 input name=email type=email
- 1 input type=submit

#### Activate
This attribute can be entered in the Activate Account page only.
Insert a Form block and add the attribute:

> account=activate

It needs specific type fields:
- 1 input name=password type=password
- 1 input name=password_confirmation type=password
- 1 input type=submit
- 1 input type=submit and atrtibute item=decline

#### Reset
This attribute can be entered in the Reset Password page only.
Insert a Form block and add the attribute:

> account=reset

It needs specific type fields:
- 1 input name=password type=password
- 1 input name=password_confirmation type=password
- 1 input type=submit

#### Recover
This can be entered anywhere you want. It serves to ask for the password recovering.
Insert a Form block and add the attribute:

> account=recover

It needs specific type fields:
- 1 input name=email type=email
- 1 input type=submit

#### Register
This attribute can be entered in the Register page only.
Insert a Form block and add the attribute:

> account=register

It needs specific type fields:
- 1 input name=password type=password
- 1 input name=email type=email
- 1 input name=first_name type=text
- 1 input name=last_name type=text
- 1 input type=submit


#### User Default Address
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=user-default-address

#### User Name
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=user-name

#### User First Name
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=user-first-name

#### User Last Name
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=user-last-name

#### User Email
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=user-email

#### User Orders Count
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=user-orders-count

#### User Total Spent
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=user-total-spent

#### orders
This attribute can be entered in the Account page only.
Insert a Text item and add the attribute:

> account=orders

Inside each single collection item you can add the following attributes on Text elements:

> item=name
> 
> item=date
> 
> item=payment-status
>
> item=fulfillment-status
>
> item=total  

On Link elements:

> item=link


#### Logout Link
This attribute can be entered in all the pages.
Insert a Link item and add the attribute:

> account=logout-link