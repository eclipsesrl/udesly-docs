---
id: woocommerce-order-confirmation
title: Order Confirmation Page
---

WooCommerce Order Confirmation default page can be now customized in Webflow. 

**To be able to customize the Order Confirmation page, be sure you are using Udesly Adapter version 2.0.0.43 at the least.**

## Order Confirmation

Elements you can insert in this page are listed below with corresponding attributes to attach:

### Email
Insert a Text element with the attribute:

> order=email

### Status
Insert a Text element with the attribute:

> order=status

### Shipping Address
Insert a Text element with the attribute:

> order=shipping-address

### Billing Address
Insert a Text element with the attribute:

> order=billing-address

### Number
Insert a Text element with the attribute:

> order=number

### Payment Method
Insert a Text element with the attribute:

> order=payment-method

### Total
Insert a Text element with the attribute:

> order=total

### Subtotal
Insert a Text element with the attribute:

> order=subtotal

### Taxes
Insert a Text element with the attribute:

> order=taxes

### Shipping Method
Insert a Text element with the attribute:

> order=shipping-method

### Products
Insert a **List** element with the attribute:

> order=products

Inside the list you can insert the following elements, with corresponding attributes:

#### Title

> item=title

#### Url

> item=url

#### Quantity

> item=quantity

#### Subtotal

> item=subtotal

#### Total

> item=total

#### Permalink

> item=permalink

#### Featured Image

> item=featured-image

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