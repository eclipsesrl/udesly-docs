---
id: version-2.0.0-wordpress-social-share-links
title: Social Share Links
original_id: wordpress-social-share-links
---

You can add social sharing buttons to WordPress posts and pages.

![](assets/wordpress-social-share.png)

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Select a **Link Block**, a **Button** or a **Link Text** element and insert the attribute:

> social={name of the social network}

Supported Social Networks are:

- facebook
- twitter
- linkedin
- reddit
- pinterest
- pocket
- vk
- skype
- telegram
- email
- weibo

**Remember to set the image for Social Networks on Yoast SEO to make it work perfectly.**



--------
> **Take in Mind**
>
> In our documentation you will find custom attributes in 2 formats:
>
> **name=value** or **name={dynamic-value}**
>
>
> **Attribute**             | **Meaning** | 
> -------------             | --------------- |
> | item=title              | *item* is the *Name* and *title* is the *Value* |
> | dimension={dimension}   | *dimension* is the *Name* and instead of {dimension} you have to insert one of the accepted value that you'll find indicated each time. For example dimension can be *master*|