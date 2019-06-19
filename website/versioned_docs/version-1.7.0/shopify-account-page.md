---
id: version-1.7.0-account-page
title: Account Page
original_id: account-page
---

The Account page is used to display a summary of the visitor’s customer account.
In consists in an **Order Table** and a **User Address** field.

## Order Table
Insert a **Div Block** and assign the following attributes:

> shopify=account
>
> el=orders

Insert 2 more **Div block** inside: the first will display the Order Table, the second will be displayed when the user has not yet ordered anything.

In the first Div insert the attribute:

> el-child=orders-list

In the other insert the attribute:

> el-child=empty-orders

In the Orders List Div you have to insert 2 **buttons** (Previous/Next) in order to enable the pagination. Insert these attributes on the corresponding buttons:

> el-child=previous-page
>
> el-child=next-page

In the same Div you have to insert a **Collection List** to show the orders made by users. In each Collection List Item you can insert several attributes for several elements. For example:

- Order Number
This is the link to the order number. Select a **Link Block**, a **Button** or a **Link Text** and insert the attribute:

> el-child=order-number

- Date
This is the  date of the order. Select a **Text Block** and insert the attribute:

> el-child=order-date

- Payment Status
This is the status of the payment. Select a **Text Block** and insert the attribute:

> el-child=order-payment-status

- Fullfillment Status
This is the finalisation status of the transaction. Select a **Text Block** and insert the attribute:

> el-child=order-fullfillment-status

- Total
This element shows the amount of the payment. Select a **Text Block** and insert the attribute:

> el-child=order-total

 

## User Address
It shows the default address of the user. Insert a **Div Block** or a **Text Block** and assign the attributes:

> shopify=account
>
> el=user-default-address

**Best Practice: it’s advisable to insert a button allowing to modify the user’s default address.**