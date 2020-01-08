---
id: netlify-custom-attributes
title: Webflow Custom Attributes
---

Custom attributes to insert for the conversion from Webflow to Netlify are pretty simple but there are a couple of recommendations for your CMS to keep in mind in order to avoid unpleasant inconveniences.

## CMS Prerequisites

1) It is advisable that all reference and multireference fields have the same name as the Collection they are referring to.

2) Collection names must consist of one word.

3) Do not use *tags* as collection name! They are already used by 11ty. Give another name to them.

4) Every element connected to the CMS needs an attribute.

5) The main Rich Text of your Collection must be named **Content.**

## Collections

The attribute to insert in the Collection List Wrapper must have the same name as the CMS Collection:

> collection={the name of the collection}

![](assets/netlify-collection-list-wrapper.png)

You can also insert two further attributes:

> limit={the number of posts to display}

> filter={the value you have in the filter field.} 

*This last attribute works for switch and reference fields only.*

![](assets/netlify-limit-filter.png)

## Collection Items

All the single items contained in the Collection List Wrapper must have their own attribute. This will take the name of the corresponding CMS field:

![](assets/netlify-cms-field.png)

All the available attributes you can insert are:

> text 
>
> image
>
> color
>
> bg-color
>
> link
>
> show-if
>
> hide-if
>
> reference
>
> multi-reference

### Text

All dynamic text element must have the attribute:

> text={the name of the corresponding CMS field}

![](assets/netlify-text.png)

The only different attribute concerns the date. Here the attribute is the following one, all the time:

> format={type of format}

In this case you can choose the date format you prefer among [these](https://date-fns.org/docs/format).

### Image

All dynamic image element must have the attribute:

> image={the name of the corresponding CMS field}

You can use it both on images than background images.

![](assets/netlify-images.png)

### Color & Background Color

To change the text color and background color dinamically, you have to use these attribute:

> color={the name of the corresponding CMS field}
>
> bg-color={the name of the corresponding CMS field}

![](assets/netlify-color.png)

### Link

The attribute for a Link element is always:

> link=url

![](assets/netlify-link.png)

### Show if & Hide if

These conditional attributes can be used on every element to show or hide it, based on specific conditions. They will take the Webflow **Conditions** element as value. 

> show-if={condition}

It shows the item if the specific condition is met.

> hide-if={condition}

It hides the item if the specific condition is met.

![](assets/netlify-conditions.png)

### Reference & Multi-Reference

The reference field is a Collection field that you can add to any of your Collections but instead of using an option field and choosing from a list of predefined values, the reference field allows you to choose from any item from another Collection. A multi-reference field allows you to reference more than one item from another Collection and then present these items in a Collection List on a Collection Page. 

To make these fields dynamic, insert a Div element that will tell us what to reference with the attribute:

> reference={the name of the corresponding CMS field}

For example when we want to show the category in a Posts Collection.

This Div element must have the attribute:

> reference=categories

![](assets/netlify-reference.png)

The same also applies to multireference fields. Obviously these will be replicated on the basis of the number of references. In fact, you can also use the limit attribute to decide how many references to show.

**All custom attributes must be entered on elements in purple.**

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