---
id: single-download-page
title: Single Download Page
---

## Single Download Page Elements

#### Content
This is the content of your download. Select a Rich Text element and insert the attribute:

> el-child=download

#### Title
This will be the title of your download. To create it select a **Text Block** and insert the attribute:

> el-child=title

connect it to the field **name** of the CMS

#### Permalink
This is the link to the download. Select a **Link Block**, a **Button** or a **Link Text** element and insert the attribute:

> el-child=permalink

#### Date
This is the publishing date of your download. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Date Format**). Otherwise, you can set another format using the attribute:

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Time
This is the publishing time of your download. Select a **Text Block** and insert the attribute:

> el-child=time

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path Settings -> General -> Time Format). Otherwise, you can set another format using the attribute

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Featured Image
This is the featured image of your download. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

#### Author
This is the author link of your download. Select a **Text Block** or a **Text Link** element if you want the url linking to blog posts created by that author and insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS 

#### Avatar
This is the gravatar of the download author. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS

#### Main Category
This is the main category of the download. Select a **Link Block**, a **Button**, a **Link Text** element or simply a text block if you don’t need the link.
Insert the attribute:

> el-child=main-category

Don’t forget that you need to set the Main Category for each product if you want to use it.

#### Price
Select a **Text Block** element and insert the attribute:

> el-child=price

#### Purchase Link
Insert a Link Block and add the attribute:

> el-child=purchase-link

The Link Block must contain three elements:

> A button containing the attribute: **el-child=add-to-cart**
>
> A div labelled Loader with the attribute: **el-child=loader** (you can use image, gif, svg, etc. )
>
> A checkout button with the attribute: **el-child=checkout**
