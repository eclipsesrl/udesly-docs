---
id: version-1.7.0-articles-template
title: Articles Template
original_id: articles-template
---

Article Template page renders a page for an individual blog article. It contains the full contents of an article.
If you’ve already created a Blog Posts CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Blog Posts collection
4) Rename the collection to “Articles”. Customize the collection adding all the needed fields to have the perfect preview
5) Click on Create
6) Insert some dummy data


## Title
This will be the title of your blog post. To create it insert a **Text Block** and add the attribute:

> el-child=title

connect it to the field **name** of the CMS

## Date
This is the publishing date of your post. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS

## Featured Image
This is the featured image of your post. Insert a **Div Block** or an **Image** with the attribute:

> el-child=featured-image

Connect the image or the background image to the field **main_image** of the CMS

## Content
This is the content of your post. Select a **Rich Text** item and insert the attribute:

> el-child=content

Connect it to the field content of the CMS

## Author
This is the author link of your post. Select a **Text Block** or a **Text Link** item if you want the url linking to blog posts created by that author.
Insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS

## Avatar
This is the gravatar of the post author. You can select a **Div Block** or a **Image** with the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS

## Categories 
This is the main category of the post. Select a **Link Block**, a **Button**, a **Link Text** item or just a **Text Block** if you don’t need the link.
Insert the attribute:

> el-child=categories

## Tags
This is the tag list of the post. Select a **Link Block**, a **Button**, a **Link Text** item or just a **Text Block** if you don’t need the link.

> el-child=tags

