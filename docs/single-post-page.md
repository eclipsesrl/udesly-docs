---
id: single-post-page
title: Single Post Page
---

## Single Post Page Elements

#### How to configure Single Post Page elements

In the single post page you can insert several elements to customize and have a perfectly functional page. You can add all or some of the following elements.

If you’ve already created a Blog Posts CMS collection in Webflow, skip the following steps.

1) Click on CMS
2) Click on Add New
3) Select Blog Posts collection
4) Customize the collection adding all the WordPress usual fields to have the perfect preview
5) Click on Create
6) Insert some dummy data.

After following these steps Webflow usually creates a page labelled **Blog Posts Template**
Select the **Blog Posts Template** page within the CMS Collection pages: In this page you can have a perfect preview of your Blog Page if you connect it to the relative CMS Field.

#### Title
This will be the title of your blog post. To create it select a **Text Block** and insert the attribute:

> el-child=title

connect it to the field **name** of the CMS

#### Date
This is the publishing date of your post. Select a **Text Block** and insert the attribute:

> el-child=date

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path **Settings -> General -> Date Format**). Otherwise, you can set another format using the attribute:

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Time
This is the publishing time of your post. Select a **Text Block** and insert the attribute:

> el-child=time

Connect it to the field **created on** of the CMS
By default, it gets format from your WordPress settings (You can change it, following the path Settings -> General -> Time Format). Otherwise, you can set another format using the attribute

> udesly-data=your format

You find all the available formats [here](https://codex.wordpress.org/Formatting_Date_and_Time)

#### Featured Image
This is the featured image of your post. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

#### Content
This is the content of your post. Select a **Rich Text** element and insert the attribute:

> el-child=content

Connect it to the field **content** of the CMS

#### Excerpt
This is the excerpt of your post. Select a **Text Block** element and insert the attribute:

> el-child=excerpt

Connect it to the field **excerpt** of the CMS

#### Author
This is the author link of your post. Select a **Text Block** or a **Text Link** element if you want the url linking to blog posts created by that author and insert the attribute:

> el-child=author

Connect it to the field **author** of the CMS 

#### Avatar
This is the gravatar of the post author. You can select a **Div Block** or an **Image** and insert the attribute:

> el-child=avatar

Connect the image or the background image to the field **author_image** of the CMS

#### Previous Post Link
This is the link to the previous post. Select a **Link Block**, a **Button** or a **Link Text** element and insert the attribute:

> el-child=prev-post

#### Next Post Link
This is the link to the next post. Select a **Link Block**, a **Button** or a **Link Text** element and insert the attribute:

> el-child=next-post

#### Main Category
This is the main category of the post. Select a **Link Block**, a **Button**, a **Link Text** element or simply a **Text Block** if you don’t need the link and insert the attribute:

> el-child=main-category

Don’t forget that you need to set the Main Category for each post if you want to use it.

#### Internal Pagination
If you want to use internal pagination for your posts, you can create the following children elements

To create an internal previous page button, select a **Link Block**, a **Button** or a **Link Text** element.
Insert the attribute:

> el-child=internal-prev-page

To create an internal next page button, select a **Link Block**, a **Button** or a **Link Text** element.
Insert the attribute:

> el-child=internal-next-page

NB: To enable the internal pagination you have to insert **<!––nextpage––>** in the Text tab of your post.


## Categories & Tags

If you already created a Categories CMS collection in Webflow, skip the following steps.

1) Press on CMS
2) Press on Add New
3) Select Categories collection
4) Customize the collection adding all WordPress usual fields to have the perfect preview
5) Press on Create
6) Insert some dummy data

Insert a **Collection List** element and connect it to the **Category** collection.

Select **Collection List Wrapper** in the navigator and insert these attributes for Categories

> wp=blog
>
> el=categories

or these ones for Tags

> wp=blog
>
> el=tags

Select Collection Item in the navigator and customize your categories/tags. You can insert the following dynamic elements inside the collection item:

##### Name
This is the name of the category/tag, you can insert a **Text Block**, or **Link Block** if you want also the link and insert the attribute:

> el-child=name

and connect it to **category_name** field

##### Permalink
This is the link of the category/tag, you can insert a **Button**, or **Link Block** and insert the attribute:

> el-child=permalink

##### Description
This is the description of the category/tag, you can insert a **Text Block**, an **Headers** or a **Paragraph** and insert the attribute:

> el-child=description

connect it to **description** field of the CMS

##### Featured Image
This is the featured image of your post, you can select a **Div Block** or a **Image** and insert the attribute:

> el-child=featured-image

Connect the image or the background image to the field **full_image** of the CMS

<iframe width="700" height="419" src="https://www.youtube.com/embed/ZwN_Gn3vvhE?list=PLLChkVtVa_ZvN8hkJYizNksV6PiHdkGfj" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Comments

> **Comment Form** and **Comments List** are elements that can be inserted only in the page you set as **Single Post Page** in the Udesly Adapter.

<iframe width="700" height="419" src="https://www.youtube.com/embed/PNR4S6xcKc0?list=PLLChkVtVa_ZvN8hkJYizNksV6PiHdkGfj" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Comment Form
Insert a **Form Block** element. Then, select it from the navigator and set the following attributes:

> wp=blog
>
> el=comment-form

The comment form is a pretty complex feature and needs a lot of elements, follow the steps carefully:

1) Insert a **Div Block** inside the Form Block and add attribute:

> el-child=must-login

Inside this element you should usually insert a text block with the message **“To comment you must be logged in, please login here”**

2) Insert a **Div Block**  inside the Form Block and add attribute:

> el-child=comments-closed

Inside this element you should usually insert a text block with the message **“Sorry, comments are now closed”**

3) Insert a **Div Block** inside the Form Block and add attribute:

> el-child=logged-in

Inside this element you should usually insert a text block with the message **“Hello User”**, inside this div block you can also insert a text block with attribute **el-child=username** to show up the username of the currently logged in user

4) The form must have the following fields:

> - Type = Plain  Name = author
>
> - Type = Email Name = email
>
> - Type = Text Area Name = comment
>
> - Type = Submit

#### Comments List
If you already created a Comments CMS collection in Webflow, skip the following steps.

1) Press on CMS
2) Press on Add New
3) Customize the collection adding all WordPress usual fields to have the perfect preview
4) Press on Create
5) Insert some dummy data

Insert a **Collection List** element and connect it to the Comments Collection.

Select **Collection List Wrapper** in the navigator and insert these attributes for Categories:

> wp=blog
>
> el=comments-list

Select now the **Collection Item** from the navigation and customize your posts. You can add all elements or only the one you desire:

##### Date
This is the publishing date of the comment, select a **Text Block** and insert the attribute:

> el-child=comment-date

Connect it to the field **created on** of the CMS

You can change the format of this field from WordPress, following the path **Settings -> General -> Date Format**

##### Author
This is the author of the comment, select a Text Block and insert the attribute:

> el-child=comment-author

Connect it to the field **author** of the CMS

##### Avatar
This is the gravatar of the comment author, you can select a **Div Block** or a **Image** and insert the attribute:

> el-child=comment-avatar

Connect the image or the background image to the field **author_image** of the CMS

##### Content
This is the content of the comment, select a **Text Block** and insert the attribute:

> el-child=comment-content

Connect it to the field **content** of the CMS

<iframe width="700" height="419" src="https://www.youtube.com/embed/JhSA_VszNwI?list=PLLChkVtVa_ZvN8hkJYizNksV6PiHdkGfj" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Single Post Page Template

Create a family of post page layouts in Webflow and use them in your WordPress blog with a click of a button. A great way if you want to theme your blog posts, or simply provide an alternative layout for different posts.

<iframe width="700" height="419" src="https://www.youtube.com/embed/GyVvxID0ST8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>