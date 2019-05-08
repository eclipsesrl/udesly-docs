---
id: cart-page
title: Cart Page
---

The Cart Page provides an overview of the items present in the cart of a specific user.

Insert a **Div Block** and assign the attributes:

> shopify=collection
>
> el=cart

Insert a **Collection List** in it and link it to the products. The Collection List item can contain several optional elements:

a Div for the Featured Image with the attribute:

> el-child=featured-image

A Link Block:

> el-child=remove

A Text Block for the Title:

> el-child=title

In the case you have a variable product, you can also set the title of the variation (in a Text Block):

> el-child=variant-title

A Text Block for the Quantity:

> el-child=quantity

A text Block for the Price:

> el-child=price

and if you have to show 2 different prices:

> el-child=original-price

A Text Block for the Total price:

> el-child=total-line

The parent Div must contain another Div having the attribute:

> el-child=cart-actions

inside which must be inserted a Text Block with the attribute:

> el-child=cart-total

and another one with the attribute:

> el-child=cart-discounts

and 2 buttons with the attributes:

> el-child=update (the one)

> el-child=checkout (the other)


#### Empty Cart
To draw the Empty Cart page (that will appear when no items are present in the cart), insert a **Div Block** and assign the attribute:

> el-child=empty-cart

you can also insert a button that redirects to the Shop Page. It must have the attributes:

> shopify=collection
>
> el=collection-link
