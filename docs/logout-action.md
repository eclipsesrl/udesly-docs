---
id: logout-action
title: Logout Action
---

You can use a **Text Link**, a **Link Block** or a **Button** and insert the attributes:

> login-area=logout

With this configuration, the logout will redirect to the Home page. If you need to redirect to another given page, you have to use the attribute **redirect** and set the slug of that page as value. E.g. if you want to redirect to the Contact Us page, you have to insert the attribute:

> redirect={slug of the contact page}

**Best practice:** it would be preferable to wrap this logout element in a div with attribute:

> show-if=logged-in

This configuration hides the logout element if the user is not logged-in.



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