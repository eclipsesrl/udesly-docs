---
id: shopify-sections
title: Sections
---
## Sections

Sections are customizable blocks of content that can be added in Shopify. In each section you can add Options to customize the Section content or style.

To create a section in Webflow, take a DIV BLOCK item and add attribute:

> section={unique section name}

Only on the home page you can add the attribute: 

> dynamic=true 

This allow the user to add or remove a section on the front page.


N.B: Remember that if you create a dynamic section you MUST set in the home page a div container with attribute 

> item=content-for-index

this is the place where all the sections added to the page will be shown.


## Sections Options

To make elements customizable from the admin panel you have to add the following options elements into the div block above. 

#### Option Text
It creates an option to modify the text of the section. Insert a Text item and add the attribute:

> option:text={Option Name}

#### Option Textarea
It creates an option to modify the text of the section. Insert a Text item and add the attribute:

> option:textarea={Option Name}

#### Option Richtext
It creates an option to modify the text of the section. Insert a RichText item and add the attribute:

> option:richtext={Option Name}

#### Option HTML
It creates an option to modify the text of the section. Insert a Text item and add the attribute:

> option:html={Option Name}

#### Option Image
It creates an option to modify the image of the section. Insert a Div or Image item and add the attribute:

> option:image={Option Name}

#### Option URL
It creates an option to modify the href of the section. Insert a Link item and add the attribute:

> option:url={Option Name}

#### Option Page
It creates an option to modify the href of the section. Insert a Link item and add the attribute:

> option:page={Option Name}

#### Option checkbox
It creates an option to show or hide an element of the section. Insert any item and add the attribute:

> option:checkbox={Option Name}