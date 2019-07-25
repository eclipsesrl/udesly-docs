---
id: version-2.0.0-shopify-login
title: Login Page
original_id: shopify-login
---

This short guide is focused on how to configure the log in page in Webflow to get it ready to be converted to Shopify by the Adapter. 

![](assets/shopify-login.png)

As first you need to define the page type adding the custom attribute below to the Body element of the page:

>page=login

<pre>
<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>
</pre>

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-shopify-elements). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, you can start from scratch, following the steps below.

Add a form to this page: select a Form block from the “Add panel” in Webflow *(Add panel > Elements > Forms section)* and add the attribute:

> account=login

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 | password           | password |
 | email | email |
 |                         | submit |


### Recover Password
Recover Password can be entered anywhere you want. It serves to ask for the password recovering.
Insert a Form block and add the attribute:

> account=recover

The form needs the following input fields: 

 **Name**             | **Type** | 
 -------------        | --------------- |
 | email | email |
 |                         | submit |


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