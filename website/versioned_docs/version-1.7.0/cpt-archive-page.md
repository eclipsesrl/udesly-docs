---
id: version-1.7.0-cpt-archive-page
title: Archive Page
original_id: cpt-archive-page
---

## Custom Post Types Archive Page

**Archive Posts** is an element that can be inserted only in the page you set as **Archive for Custom Post Type** in the Udesly Adapter App. It is mandatory that the page must be labelled **archive-slug of your custom post type**

![](assets/cpt-archive-1.png)

If you’ve already created a Blog Posts CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select your Archive Posts Type collection (e.g. project)
4) Customize the collection adding all the WordPress usual fields to have the perfect preview
5) Click on Create
6) Insert some dummy data.

Insert a **Collection List** element and connect it to the **Archive Posts Collection** (for example “project”).
Select **Collection List Wrapper** in the navigator and insert these attributes for Archive Posts

> wp=custom-post-type
>
> el=archive-posts

![](assets/col-list-wrap.png)

Select now the Collection Item from the navigation and customize your posts. You can add all the elements or only the one you desire:

#### Title
This will be the title of your blog post. To create it select a Text Block
insert the attribute:

> el-child=title

connect it to the field **name** of the CMS
![](assets/cms-name.png)

#### Permalink
This is the link to the post. Select a **Link Block**, a **Button** or a **Link Text** element
Insert the attribute:

> el-child=permalink

#### Date
This is the publishing date of your post. Select a **Text Block**
Insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS
![](assets/created-on-cms.png)

By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Date Format**). Otherwise, you can set another format using the attribute

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Time
This is the publishing time of your post. Select a Text Block
Insert the attribute:

> el-child=time

Connect it to the field **created on** of the CMS
![](assets/created-on-cms.png)

By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Time Format**). Otherwise, you can set another format using the attribute

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Featured Image
This is the featured image of your post. You can select a **Div Block** or an **Image**
Insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **main image** of the CMS
![](assets/main-image-cms.png)

#### Excerpt
This is the excerpt of your post. Select a **Text Block** element
Insert the attribute:

> el-child=excerpt

Connect it to the field **post summary** of the CMS
![](assets/post-summary-cms.png)
You can customize the length of the excerpt and the last word from **Udesly Plugin->Settings->Blog**

#### Author
This is the author link of your post. Select a **Text Block** or a **Text Link** element if you want the url linking to blog posts created by that author
Insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS

#### Avatar
This is the gravatar of the post author. You can select a **Div Block** or an **Image**
Insert the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS


## Custom Post Types Archive Navigation

To make a functional Archive Navigation you can use several elements like **Previous Page**, **Next Page** and **Numbers**. It’s adviced to use all the elements but you can decide to use only some as well.

> Previous Page, Next Page and Numbers can be used only in the page you set as **Archive for Custom Post Type** in the Udesly Adapter App.

#### Previous Page
This is the previous page link. Select a **Link Block**, a **Button**, a **Link Text** element and insert the attributes:

> wp=custom-post-type
>
> el=prev-page

#### Next Page
This is the next page link. Select a **Link Block**, a **Button**, a **Link Text** element and insert the attributes:

> wp=custom-post-type
>
> el=next-page

#### Numbers
Insert a **List** element and add the attributes:

> wp=custom-post-type
>
> el=numbers

The list must have 3 List items.

- **Current:**
This element gives the current page position. To create it select a **Text Block** and insert it inside the List Item.
Select the List Item from the navigator and insert the attribute:

> el-child=current

- **Number:**
This element gives the link to a specific page. To create it select a **Button**, **Link Block** or **Text Link** and insert it inside the List Item.
Select the List Item from the navigator and insert the attribute:

> el-child=number

- **Dots:**
This element is the dots separator that appears when you have a lot of pages. To create it insert an element inside the List Item.
Select the List Item from the navigator and insert the attribute:

> el-child=dots


