---
id: collections-template
title: Collections Template
---

This template is used to render a page where all of the collections (categories) in the shop are listed.
If you’ve already created a Categories CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Categories collection and rename it to “Collections”
4) Customize the collection adding all the needed fields to have the perfect preview
5) Click on Create
6) Insert some dummy data

To create the **Collection Title** insert a **Text Block** in a **Div Block** and assign the attributes:

> shopify=collection
>
> el=collection-title

To create the **Collection Description** insert a **Text Block** with the attributes:

> shopify=collection
>
> el=collection-description

Insert a **Collection List** element and connect it to **Collections** collection.

Select Collection List Wrapper in the navigator and insert these attributes:

> shopify=collection
>
> el=products-list

Select now the Collection Item and insert a **Link Block** and assign the attribute:

> el-child=link

Now, you can add all elements or only the one you desire to products in your Collections:

#### Title

This is the title of the Product. You can insert a **Text Block**, or **Link Block** if you want also the link.
Insert the attribute:

> el-child=title

and connect it to **name** field of the CMS.

#### Description
This is the description of the product. You can insert a **Text Block**, a **Header** or a **Paragraph**.
Insert the attribute:

> el-child=description

and connect it to the **description** field of the CMS.

#### Featured Image
This is the featured image of the product. You can select a **Div Block** or an **Image**.
Insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **image** of the CMS.

#### Price
Select a **Text Block** and insert the attribute:

> el-child=price

#### On Sale
Insert the element you wish. It will only appear when a product is on sale (a Div Block with a text, for example). Insert the attribute:

> el-child=on-sale

#### Sold-out
Insert the element you wish. It will only appear when a product is sold-out (a Div Block with a text, for example). Insert the attribute:

> el-child=sold-out

#### Tags and Collections
Insert a **List** item and add a link (Tags) within it. The list will have the attribute:

> el-child=tags

A second list will have a second link (Collections). Assign the following attribute to the list:

> el-child=collections

#### Pagination
The Pagination buttons must be contained in the Parent Div Block necessarily, otherwise the pagination does not work.
Assign the appropriate attributes to the corresponding button. They are:

> shopify=collection
>
> el=prev-page

and

> shopify=collection
>
> el=next-page

In order to display tags, types and vendors of a given Collection follow these steps:

in the Parent Div Block insert a **List** item and assign the following attributes;

> shopify=collection
>
> el=collection-tags

In this way all the tags contained within that specific Collection will appear.

If you want to display Tags of the whole Shop as well, insert another **List** item with these attributes:

> shopify=collection
>
> el=collection-all-tags

Same path shall be followed in order to display Collection Types and Vendors: insert **List** items with the attributes, respectively:

> shopify=collection
>
> el=collection-types

and

> shopify=collection
>
> el=collection-vendors
