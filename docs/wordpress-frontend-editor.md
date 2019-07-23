---
id: wordpress-frontend-editor   
title: Frontend Editor
---

The Frontend Editor allows to edit some content in your WordPress site visually, without need to access your Webflow theme again. It is accessible by enabling the Udesly WP plugin.

It automatically takes: images, texts, links, iframes and videos.

![](assets/frontend-editor-2.png)

Each content is referred through the hashing of the content itself.

What you edit via Frontend Editor is deleted once there's no more reference about that specific content on Webflow.
Contents are referenced through an hashing of the content itself. 

**E.G.** an H1 with content "my title" gets hashed to a code like *text_12123123*, so when the client edits this, it changes the value that referres to that specific code. Every conversion releases always the same hash for the same content, so you lose your client's edits only if you change the H1 with text "my title" with another content.

Because the hashing is always the same, if you have two duplicates elements in the same page (2 *lorem ipsum*, for example), these elements cannot be edited separately. To overcome this problem you can use the following attribute:

> duplicate={your random string}

Background images are not automatically took. You have to use the following attribute:

> background-image={your random string}


--------- 
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