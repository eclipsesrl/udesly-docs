---
id: version-2.1.0-ghost-members
title: Members
original_id: ghost-members
---

Ghost makes it possible to launch a membership business, develop a direct relationship with your fans and generate revenue from your creative work.

You can create pages and posts reserved to members. Members can be enabled from Ghost **LABS** section.

![](labs.png)

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Membership section needs only three Forms having just an **Email type field** for each one of them. These forms are:

## Sign Up Form
Insert a Form Block with the following attribute:

> members=signup

## Sign In Form
Insert a Form Block with the following attribute:

> members=signin

## Subscribe Form
Insert a Form Block with the following attribute:

> members=subscribe

This one will act as a Login form if the user is already present.

Finally you have to insert a Sign Out button.

## Sign Out Button
Insert a link and add the following attribute:

> members=sign-out


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