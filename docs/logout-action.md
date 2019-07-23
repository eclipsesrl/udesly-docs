---
id: logout-action
title: Logout Action
---

Logging out ensures that user access and user credentials are safe after the login session.

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

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