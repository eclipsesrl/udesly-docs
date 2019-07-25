---
id: wordpress-acf-items
title: Advanced Custom Fields 
---

The general structure of attributes to enter in order to add an Advanced Custom Field is:

> acf:{field-type}={field-slug}

> **Tips:**
> Take a look at our [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview). It’s a set of all the most used elements with the necessary custom attributes already added. You just need to copy and paste the element in your Webflow page and give it your own style. This will help you quicken the workflow. If you have already completed your design and just want to convert the project to Shopify, maybe the quicker way to proceed is to add the custom attributes manually following our guide.
>
> Otherwise, if you want to start from scratch, follow the guide below.


## Text

To insert an ACF Text field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:

> acf:text={slug}

## Text Area

To insert an ACF Text Area field, you have to use a **Text Block** and insert the following attributes:

> acf:textarea={slug}

## Rich Text

To insert an ACF Rich Text field, you have to use a **Rich Text** and insert the following attributes:

> acf:richtext={slug}

## Number

To insert an ACF Number field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:

> acf:number={slug}

## Url

To insert an ACF Url field, you have to use a **Text Link** or **Link Block** or **Button** and insert the following attributes:

> acf:url={slug}

## Image

To insert an ACF Image field, you have to use a **Div Block** or **Image** and insert the following attributes:

> acf:image={slug}

## Date

To insert an ACF Date field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:

> acf:date={slug}

## Time

To insert an ACF Time field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:

> acf:time={slug}

## Datetime

To insert an ACF Datetime field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:

> acf:datetime={slug}

## Color

To insert an ACF Color field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:

> acf:color={slug}

## Background Color

To insert an ACF Background Color field, you have to use a **Div Block** and insert the following attributes:

> acf:bgcolor={slug}

## Link

To insert an ACF Link field, you have to use a **Link** element and insert the following attribute:

> acf:link={slug}

## Switch

To insert an ACF Switch field, you can use any element and add the following attribute:

> acf:switch={slug}

## File

To insert an ACF File field, you have to use a **Button** or **Link** element and add the following attribute:

> acf:file={slug}

## oEmbed

The oEmbed field allows an easy way to embed videos, images, tweets, audio, and other content.

To insert an ACF oEmbed field, you have to use a **Div Block** and insert the following attribute:

> acf:oembed={slug}

## Repeater

**Only for ACF PRO.** You can use any element that will be repeated and add the following attribute:

> acf:repeater={slug}

Inside the element you have entered the attribute, you can insert the following subfields:

- Text
- Text Area
- Rich Text
- Url
- Image
- Date
- Time
- Datetime
- Color
- Background Color
- Link
- Switch 
- File 
- Embed

These subfields must have the attribute:

> subfield:{field-type}={field-slug}

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