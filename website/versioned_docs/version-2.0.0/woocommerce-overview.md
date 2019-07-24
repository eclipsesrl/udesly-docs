---
id: version-2.0.0-woocommerce-overview
title: WooCommerce Overview
original_id: woocommerce-overview
---

WooCommerce structure works with different pages that can be grouped in 2 different types: 

## Archive Pages

- **Main Archive Page**

    This page is used for Main Shop Page and for taxonomies such as: Categories, Tags and Search if not defined otherwise.

    > page=archive
    > 
    > post-type=product
 

## Single Pages

- **Single Product Page**

    This page is used for each Product of your Shop. This page must have the following attribute on the Body:

    > page=single
    >
    > post-type=product    


If you want to customize the style of the shop further, there are other page types at your disposal:

## Taxonomy Pages

- **Category page**

    This page is used for every category of your WooCommerce Shop. This page must have the following attribute on the Body:

    > page=taxonomy
    >
    > post-type=product_cat

- **Tag page**

    This page is used for every tag of your WooCommerce Shop. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=product_tag

- **Specific Category page**

    This page is used for a specific category of your WooCommerce Shop. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=product_cat
    >
    > specific={slug of your category or ID of your category}    


- **Specific Tag page**

    This page is used for a specific tag of your WooCommerce Shop. This page must have the following attributes on the Body:

    > page=taxonomy
    >
    > post-type=product_tag
    >
    > specific={slug of your tag or ID of your tag}


## Specific Single Product Pages

- **Specific Product**

    This page is used for a *specific* produc of your WooCommerce to give it a different style from the others . This page must have the following attribute on the Body:

    > page=single
    >
    >post-type=product
    >
    > specific={slug of your post or ID of your product}

**Webflow allows to include Add to Cart element only in the default product template. For this reason you can include Add to Cart element in a specific Single Product page. This kind of page may be useful for external or coming soon products.**

## Single Product Template 

- **Single Product Template**

    This page is a template that can be used instead of your generic single product page. To be displayed, you have to select the template from WordPress backend (for each product). This page must have the following attribute on the Body:

    > page=template
    >
    > post-type=product

**Webflow allows to include Add to Cart element only in the default product template. For this reason you can include Add to Cart element in a specific Single Product page. This kind of page may be useful for external or coming soon products.**


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