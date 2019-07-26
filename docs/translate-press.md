---
id: translate-press
title: Translate-press
---

Translate Press is a WordPress plugin that allows to translate all your website content directly from the front-end, in a friendly user interface (the translation is displayed in real-time).
To use it you need to download [Translate Press plugin](https://wordpress.org/plugins/translatepress-multilingual/) from the WordPress repository.
In your project you can easily create a language switch link that allows users to switch between the different languages of your website.

> **Tips:**
> Take a look at our [elements pack](https://webflow.com/website/webflow-to-wordpress-elements-pack). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to WordPress, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.

Insert a Link item and add the following attribute:

> translate-press={language-code}

--- **E.G**

--- > translate-press=en_UK


State "active" will be applied if it's the current language.







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