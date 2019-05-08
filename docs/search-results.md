---
id: search-results
title: Search Results
---

## How to configure Search Results

Search Results is an element that can be inserted only in the page you set as **Search Page** in the Udesly Adapter.

If you’ve already created a Blog Posts CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Blog Posts collection
4) Customize the collection adding all the WordPress usual fields to have the perfect preview
5) Click on Create
6) Insert some dummy data.

Insert a **Collection List** element and connect it to the Blog Posts Collection.

Select Collection List Wrapper in the navigator and insert these attributes for Categories.

> wp=search
>
> el=search-results

Select now the Collection Item from the navigation and customize your posts. You can add all elements or only the one you desire:

#### Title
This will be the title of your search result. To create it select a **Text Block** and insert the attribute:

> el-child=title

connect it to the field **name** of the CMS

#### Permalink
This is the link to the search result, select a **Link Block**, a **Button** or a **Link Text** element and insert the attribute:

> el-child=permalink

#### Date
This is the publishing date of your search result. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Date Format**). Otherwise, you can set another format using the attribute:

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Time
This is the publishing time of your search result. Select a **Text Block** and insert the attribute:

> el-child=time

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path Settings -> General -> Time Format). Otherwise, you can set another format using the attribute

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Featured Image
This is the featured image of your search result. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

#### Excerpt
This is the excerpt of your search result. Select a **Text Block** element and insert the attribute:

> el-child=excerpt

Connect it to the field **excerpt** of the CMS.
You can customize the length of the excerpt and the last word from **Udesly->Settings->Blog**

#### Author
This is the author link of your search result. Select a **Text Block** or a **Text Link** element if you want the url linking to blog posts created by that author and insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS 

#### Avatar
This is the gravatar of the search result. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS

<iframe width="700" height="419" src="https://www.youtube.com/embed/tXhHMb3sdl0?list=PLLChkVtVa_Zs1Xkb5m8MSzXT_MBBNu4TL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="700" height="419" src="https://www.youtube.com/embed/Y27oXg_1JRM?list=PLLChkVtVa_Zs1Xkb5m8MSzXT_MBBNu4TL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="700" height="419" src="https://www.youtube.com/embed/2_hJQpJROI8?list=PLLChkVtVa_Zs1Xkb5m8MSzXT_MBBNu4TL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>