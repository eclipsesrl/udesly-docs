---
id: page-creator-overview
title: Page Creator Overview
---

## How to create pages directly from WordPress matching your Webflow Style

You can add several dynamic elements to the the pages that you set as **Generic Page**, **Template** and **Default Template** page in the Udesly Adapter App.
If you insert these elements in the **Generic Page** you will be able to customize even more the pages synced in WordPress from Webflow.
If you insert these elements inside a **Template** and/or **Default Template**, you will be allowed to create new Pages in WordPress following your Webflow style.

> Note: to unleash the WordPress power we suggest creating a Default Template and at least one Template. While, it’s not strictly required to use dynamic elements inside the Generic Page (you will be already able to modify a lot of elements using the Frontend Editor).

These are the elements you can use in the mentioned pages:

#### Title
This will be the title of your page. To create it select a **Text Block** and insert the attribute:

> el-child=title

connect it to the field **name** of the CMS

#### Date
This is the publishing date of your date. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Date Format**). Otherwise, you can set another format using the attribute:

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Time
This is the publishing time of your page. Select a **Text Block** and insert the attribute:

> el-child=time

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path Settings -> General -> Time Format). Otherwise, you can set another format using the attribute

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Featured Image
This is the featured image of your page. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

#### Content
This is the content of your post. Select a **Rich Text** element and insert the attribute:

> el-child=content

Connect it to the field **content** of the CMS

<iframe width="700" height="419" src="https://www.youtube.com/embed/ms0PwLWLb6U?list=PLLChkVtVa_ZvDTyshuoLEBuCqzrU82QL-" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>