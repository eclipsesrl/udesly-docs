---
id: version-1.7.0-search-navigation
title: Search Navigation
original_id: search-navigation
---

## How to set attributes for Search navigation

To make a functional Search Navigation you can use several elements like **Previous Page**, **Next Page** and **Numbers**. It’s adviced to use all the elements but you can decide to use some as well. Previous Page, Next Page and Numbers can be used only in the page you set as **Search Page** in the Udesly Adapter app configuration.

#### Previous Page
This is the previous page link, select a **Link Block**, a **Button**, a **Link Text** element and insert the attributes:

> wp=search
>
> el=prev-page

#### Next Page
This is the next page link, select a **Link Block**, a **Button** or **Link Text** element and insert the attributes:

> wp=search
>
> el=next-page

#### Numbers
Insert a **List** element and add the attributes:

> wp=search
>
> el=numbers

The list must have 3 List items:

- **Current:** This element gives the current page position. To create it, select a Text Block and insert it inside the List Item.
Select the List Item from the navigator and insert the attribute:

> el-child=current

- **Number:** This element gives the link to a specific page. To create it, select a Button, Link Block or Text Link and insert it inside the List Item.
Select the List Item from the navigator and insert the attribute:

> el-child=number

- **Dots:** This element is the dots separator that appears when you have a lot of pages. To create it, insert an element inside the List Item.
Select the List Item from the navigator and insert the attribute:

> el-child=dots

<iframe width="700" height="419" src="https://www.youtube.com/embed/7G1cgjzhcfY?list=PLLChkVtVa_Zs1Xkb5m8MSzXT_MBBNu4TL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
