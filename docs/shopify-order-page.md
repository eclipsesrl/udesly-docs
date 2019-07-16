---
id: shopify-order-page
title: Order Page
---

The Order page is used to display the details of a visitor’s past order. The following elements can be set only on the **Order page**.

#### Order Date

It is the date of publication of the order. Insert a text element and enter the attribute:

> item=date

To handle the date format, you can use the following optional attribute:

> [format={date-format}](shopify-optional-filters#date-format)

*For further info on how to set this optional attribute, please take a look on this [document](shopify-optional-filters)*

#### Cancel Date
It is the date of cancellation of the order. Insert a text element and enter the attribute:

> item=cancelled-date

To handle the date format, you can use the following optional attribute:

> [format={date-format}](shopify-optional-filters#date-format)

*For further info on how to set this optional attribute, please take a look on this [document](shopify-optional-filters)*

#### Cancel Reason
This is the reason behind the cancellation of the order. Insert a Text item and add the attribute:

> item=cancel-reason

#### Billing Address
Insert a Text item and add the attribute:

> item=billing-address

#### Shipping Address
Insert a Text item and add the attribute:

> item=shipping-address

#### Subtotal
Insert a Text item and add the attribute:

> item=subtotal

#### Total
Insert a Text item and add the attribute:

> item=total

#### Taxes
Insert a Div element that gets repeated and add the attribute:

> item=taxes

    Inside you can add on Text items:
    
    > item=tax-title

    and

    > item=tax-price


#### discounts
Insert a Div element that gets repeated and add the attribute:

> item=discounts

    Inside you can add on Text items:
    
    > item=discount-code

    and

    > item=discount-savings


#### shipping
Insert a Div element that gets repeated and add athe attribute:

> item=shipping

    Inside you can add on Text items:
    
    > item=shipping-title

    and

    > item=shipping-price


#### Name
Insert a Text item and add the attribute:

> item=name


#### Items
Insert a Collection List wrapper. On the Collection List items you can add the following attributes.

On Text elements:

> item=title
>
> item=tracking-company
>
> item=sku
>
> item=quantity
>
> item=total
>
> item=item-price


On Link elements:

> item=tracking-url
>
> item=link
