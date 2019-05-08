---
id: collection-lists
title: Collection Lists
---

This page is used to render the collection page. The primary purpose of this page is to list the products within a collection, often presented as a grid of images with product titles and descriptions.

If you’ve already created a Blog Posts CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Blog Posts collection
4) Change the collection’s name to “Collections”. Customize the collection adding all the needed fields to have the perfect preview
5) Click on Create
6) Insert some dummy data

Insert a **Collection List** item and connect it to **Collections** Collection.

Select the Collection List Wrapper in the navigator and insert these attributes:

> shopify=collection
>
> el=collection-lists

Select now the Collection Item and insert a **Link Block** with the the attribute:

> el-child=link

Now, you can add all elements or only the one you desire to your Collections:

#### Title
This will be the title of your product. To create it select a **Text Block** and insert the attribute:

> el-child=title

connect it to the field **name** of the CMS

#### Featured Image
This is the featured image of the product. You can select a **Div Block** or an **Image** with the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

#### Description
Select a **Text Block** and insert the attribute:

> el-child=description

#### Products Count
Select a **Text Block** and insert the attribute:

> el-child=products-count

#### Empty Collection List
To draw the Empty Collection List page (that will appear when no items are present in the Collection), insert a **Div Block** and assign the attributes:

> shopify=collection
>
> el=collection-lists-container

you can also insert two button that redirects to other Collection List pages. They must have the attributes:

> shopify=collection
>
> el=prev-page

and

> shopify=collection
>
> el=next-page

respectively.