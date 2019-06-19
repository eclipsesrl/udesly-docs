---
id: version-1.7.0-blogs-template
title: Blogs Template
original_id: blogs-template
---

This template is used to render the blog page. The primary purpose of this page is to list the articles within a blog.
If you’ve already created a Blog Posts CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Blog Posts collection and rename it “Blogs”
4) Customize the collection adding all the needed fields to have the perfect preview
5) Click on Create
6) Insert some dummy data

First of all, you need to create the **Blog Container**. Insert a **Div Block** and assign the attributes:

> shopify=blog
>
> el=blog-container

To create the **Blog Title** insert a **Text Block** in the Blog Container with the attributes:

> shopify=blog
>
> el=blog-title

In the same Blog Container insert a **Collection List** element and connect it to the **Blogs** collection.

Select Collection List Wrapper in the navigator and insert these attributes:

> shopify=blog
>
> el=blog-posts

Select now the Collection Item from the navigation and customize your posts. You can add all the elements or only the one you desire:

## Title
This will be the title of your blog post. To create it insert a **Text Block** and add the attribute:

> el-child=title

connect it to the field **name** of the CMS

## Link
This is the link to the post. Select a **Link Block**, a **Button** or a **Link Text** and insert the attribute:

> el-child=link

## Date
This is the publishing date of your post. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS

## Featured Image
This is the featured image of your post. Insert a **Div Block** or an **Image** with the attribute:

> el-child=featured-image

Connect the image or the background image to the field **main_image** of the CMS

## Excerpt
This is the excerpt of your post. Select a **Text Block** and insert the attribute:

> el-child=excerpt

Connect it to the field **excerpt** of the CMS

## Author
This is the author link of your post. Select a **Text Block** or a **Text Link** item if you want the url linking to blog posts created by that author.
Insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS

## Avatar
This is the gravatar of the post author. You can select a **Div Block** or a **Image** with the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS

## Tags
These are the tags of your post, insert a **Text Blog** with the attribute:

> el-child=tags

## Pagination
The Pagination buttons must be contained in the Blog Container necessarily, otherwise the pagination does not work.
Assign the appropriate attributes to the correspondent button. They are:

> shopify=blog
>
> el=prev-page

and

> shopify=blog
>
> el=next-page