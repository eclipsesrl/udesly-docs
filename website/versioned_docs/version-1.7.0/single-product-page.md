---
id: version-1.7.0-single-product-page
title: Single Product Page
original_id: single-product-page
---

## Single Product Page Elements

#### Product Container

This is the most important element since it must contain all the other elements listed below.

Insert a **Div Block** and add the following attribute:

> el-child=product-container

#### Title
This will be the title of your product. To create it select a **Text Block** and insert the attribute:

> el-child=title

connect it to the field **name** of the CMS

#### Date
This is the publishing date of your product. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Date Format**). Otherwise, you can set another format using the attribute:

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Time
This is the publishing time of your product. Select a **Text Block** and insert the attribute:

> el-child=time

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path Settings -> General -> Time Format). Otherwise, you can set another format using the attribute

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Featured Image
This is the featured image of your product. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

#### Excerpt
This is the excerpt of your product. Select a **Rich Text** element and insert the attribute:

> el-child=excerpt

Connect it to the field **excerpt** of the CMS
You can customize the length of the excerpt and the last word from **Udesly Plugin->Settings->Woocommerce**

#### Author
This is the author link of your product. Select a **Text Block** or a **Text Link** element if you want the url linking to blog posts created by that author and insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS 

#### Avatar
This is the gravatar of the product author. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS

#### Main Category
This is the main category of the product. Select a **Link Block**, a **Button**, a **Link Text** element or simply a text block if you don’t need the link.
Insert the attribute:

> el-child=main-category

Don’t forget that you need to set the Main Category for each product if you want to use it.

#### Price
Select a **Text Block** element and insert the attribute:

> el-child=price

#### Rating
Create a **Div Block** you want the rating to appear in. Insert two more Div Blocks within it. One must have the attribute:

> el-child=full

The other the attribute:

> el-child=empty

Both of them are dynamic and they will behave on the basis of the rating given by the user.

 
#### Add to Cart
Insert a **Div Block** and add the attribute:

> el-child=add-to-cart

This is just a placeholder. It indicates the position of the Add to Cart button only. To customize it use the Udesly Customizer plugin.

#### On Sale
Insert the element you wish. It will only appear when a product is on sale (a Div Block with a text, for example). Insert the attribute:

> el-child=on-sale

#### SKU
Sku is an identification, usually alphanumeric, of a particular product that allows it to be tracked for inventory purposes.

Insert a **Text Block** and add the attribute:

> el-child=sku

#### Product Gallery
Insert a **Div Block** with the attribute:

> el-child=product-gallery

Insert only one Slider within. Then insert a Lightbox in the Slider with the attribute:

> el-child=lightbox-trigger

Insert another **Div Block** inside the first one having the attribute:

> el-child=thumbnail-container

Finally, the latter must contain 2 more Div Blocks with the attributes:

> el-child=current-thumbnail (in the first one)
>
> el-child=thumbnail (in the second one).

#### Tabs
Insert a **Tabs** element with the attribute:

> el-child=tabs

This element must contain 2 tabs. The first needs the attribute:

> el-child=current-tab

The second needs the attributes:

> el-child=tab

Open the first Tab in the Navigator and assign the following attribute to the Tab Panel:

> el-child=tab-content

Don’t forget to insert a Rich Text as well.


## Upsells and Related

If you’ve already created a Product CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Blog Posts collection
4) Customize the collection adding all the WordPress usual fields to have the perfect preview
5) Click on Create
6) Insert some dummy data

**Remember that you can add Upsell and Related feature in the Single Product page only.**

Insert a **Collection List** element and connect it to the **Products** Collection.

Select the Collection List Wrapper in the navigator and insert these attributes for Upsells:

> wp=woo
>
> el=upsells

Select the Collection List Wrapper in the navigator and insert these attributes for Related:

> wp=woo
>
> el=related

Select now the Collection Item from the navigation and customize your products. You can add all elements or only the one you desire:

#### Title
This will be the title of your product. To create it select a **Text Block** and insert the attribute:

> el-child=title

connect it to the field **name** of the CMS

#### Permalink
This is the link to the product. Select a **Link Block**, a **Button** or a **Link Text** element and insert the attribute:

> el-child=permalink

#### Date
This is the publishing date of the product. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS

By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Date Format**). Otherwise, you can set another format using the attribute:

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Time
This is the publishing time of the product. Select a **Text Block** and insert the attribute:

> el-child=time

Connect it to the field **created on** of the CMS

By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Time Format**). Otherwise, you can set another format using the attribute:

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Featured Image
This is the featured image of the product. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

#### Excerpt
This is the excerpt of the product. Select a **Text Block** element and insert the attribute:

> el-child=excerpt

Connect it to the field **excerpt** of the CMS
You can customize the length of the excerpt and the last word from **Udesly Plugin->Settings->Woocommerce**

#### Author
This is the author link of the product. Select a **Text Block** or a **Text Link** element if you want the url linking to products created by that author.
Insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS

#### Avatar
This is the gravatar of the product author. You can select a **Div Block** or a **Image** and insert the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS

#### Main Category
This is the main category of the product. Select a **Link Block**, a **Button**, a **Link Text** element or simply a **Text Block** if you don’t need the link.
Insert the attribute:

> el-child=main-category

Don’t forget that you need to set the Main Category for each post if you want to use it.

#### Price
Select a **Text Block** element and insert the attribute:

> el-child=price

#### Rating
Create a **Div Block** you want the rating to appear in.
Insert two more Div Blocks within it. One must have the attribute:

> el-child=full

The other the attribute:

> el-child=empty

Both of them are dynamic and they will behave on the basis of the rating given by the user.

#### Add to Cart
Insert a **Link Block** and add the attribute:

> el-child=add-to-cart

The Link Block must contain three elements:

- A Text (the button text)
- An image labelled loading (you can use image, gif, svg, etc. )
- An image labelled added in which you can insert a mark of successful entry.

#### On Sale
Insert the element you wish. It will only appear when a product is on sale (a Div Block with a text, for example). Insert the attribute:

> el-child=on-sale
