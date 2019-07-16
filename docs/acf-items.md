---
id: acf-items
title: Advanced Custom Fields 
---

The general structure of attributes to enter in order to add an Advanced Custom Field is:

> acf:{field-type}={field-slug}

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

## Embed

To insert an ACF Embed field, you have to use a **Div Block** and insert the following attribute:

> acf:embed={slug}

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