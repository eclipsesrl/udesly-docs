---
id: order-page
title: Order Page
---

The Order page is used to display the details of a visitor’s past order.
There are several elements you can insert in the Order page in order to get a complete summary of the past orders made by a certain user. Let’s see all of them:

#### Order Name
Insert a **Text Block** and assign the following attributes:

> shopify=account
>
> el=order-name

#### Order Date
Insert a **Text Block** and assign the following attributes:

> shopify=account
>
> el=order-date

#### Order Cancelled
Insert a **Div Block** and assign the following attributes:

> shopify=account
>
> el=order-cancelled

You can show the deletion date and the reasons behind. In the Div Block insert 2 **Text Blocks** and assign the following attributes to the corresponding block:

> el-child=cancelled-date
>
> el-child=reason

#### Order Table
Insert a **Div Block** and assign the following attributes:

> shopify=account
>
> el=order

Insert a **Collection List** element. You can add all the following elements or only the ones you desire:

- **Title:**
This will be the title of the order. To create it select a **Text Block** and insert the attribute:

> el-child=title


- **Fullfillment Date:**
This is the finalisation date of the order. Select a **Text Block** and insert the attribute:

> el-child=fullfillment-date


- **Tracking URL:**
This link allows to follow the order trail. Insert a **Text Link** and assign the attribute:

> el-child=tracking-url


- **Tracking Company:**
It is the name of the Tracking Company. Insert a **Text Block** and assign the attribute:

> el-child=company


- **Tracking Number:**
It’s the tracking number of a given order. Insert a **Text Block** and assign the attribute:

> el-child=tracking-number


- **Sku:**
This is the order identification code. Insert a **Text Block** and assign the attribute:

> el-child=sku


- **Price:**
Select a **Text Block** and insert the attribute:

> el-child=price


- **Quantity:**
Select a **Text Block** and insert the attribute:

> el-child=quantity


- **Total:**
Select a **Text Block** and insert the attribute:

> el-child=total

- **Order Details:**
In order to get a complete financial record of orders made by a certain user, you can insert several elements:

*Subtotal:* 
Select a **Text Block** and insert the attribute:

> el-child=subtotal

*Discount Saving:* 
Select a **Text Block** and insert the attribute:

> el-child=discount-saving

*Shipping Total:*
Select a **Text Block** and insert the attribute:

> el-child=shipping-total

*Tax Total:*
Select a **Text Block** and insert the attribute:

> el-child=tax-total

*Order Total:*
Select a **Text Block** and insert the attribute:

> el-child=order-total

- **Billing and Shipping Addresses**
Lastly, you can insert the billing address and the shipping address related to a specific user.

*Billing Address:*
Select a **Text Block** and insert the attributes:

> shopify=account
>
> el=billing-address

*Shipping Address:*
Select a **Text Block** and insert the attributes:

> shopify=account
>
> el=shipping-address
