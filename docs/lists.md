---
id: lists
title: Lists
---

## How to configure lists

If you’ve already created a Blog Posts CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Categories collection
4) Customize the collection adding all the WordPress usual fields to have the perfect preview
5) Click on Create
6) Insert some dummy data.

Insert a **Collection List** element and connect it to the **Category Collection**.
Select **Collection List Wrapper** in the navigator and insert these attributes for Categories

> wp=general
>
> el=list
>
>udesly-slug=slug of the list you have created in the Udesly plugin

#### Name
This will be the name of of the category/tag. To create it select a **Text Block** or **Link Block** and insert the attribute:

> el-child=name

connect it to the field **category_name** of the CMS

#### Permalink
This is the link to the category/tag. Select a **Link Block** or **Button** element and insert the attribute:

> el-child=permalink

#### Description
this is the description of the category/tag, you can insert a **Text Block**, an **Header** or a **Paragraph** and add the attribute:

> el-child=description

Connect it to the field **description** of the CMS


#### Featured Image
This is the featured image of your post. You can select a **Div Block** or an **Image**
Insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS
