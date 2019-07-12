---
id: shopify-pages-structure
title: Pages Structure
---



If you’re new to Shopify, maybe you don’t know there are some mandatory pages you must include to have your Shopify store working properly: 

## Mandatory Pages
> Index
>
> Cart
>
> Blog
>
> Default
>
> Collection
> 
> Product

**The first step in building a Shopify theme is to create those pages in Webflow.**


## Page Types
In order to have a Webflow template ready to be converted to a Shopify one, Adapter must understand what kind of pages you created in your Template, so to help it, you have to add some custom attributes to the **Body** element of your Webflow page. Below you can find all page types that can be used in Shopify:

### All Page Types


**Page Type**             | **Required Attribute** | **Page Purpose**
-------------             | ---------------------- | ----------------------
Blog                      | *page=blog*            | Shows all articles of your blog
Article                   | *page=article*         | Includes the content of a single blog article
Collection                | *page=collection*      | Shows all products of a single collection
Collections List          | *page=list-collections*| Shows all of the collections in your store
Product                   | *page=product*         | Shows a product and its variants. It includes product images, pricing information, a product description, and an Add to cart button.
Cart                      | *page=cart*            | Shows a summary of all of the products that a customer has added to the cart, a subtotal and a total price for the order, and a Checkout button that directs customers to Shopify's secure checkout pages. 
Gift Card                 | *page=gift-card*       | Shows a single gift card
Account                   | *page=account*         | Shows the customer account page. It's accessible only if you've enabled customer accounts in the Settings > Checkout area of your Shopify admin.
Login                     | *page=login*           | Shows the customer login page. It's accessible only if you've enabled customer accounts in the Settings > Checkout area of your Shopify admin. 
Activate Account          | *page=activate*        | Shows a form with which the customer can activate an account. Includes the customer login page. It's accessible only if you've enabled customer accounts in the Settings > Checkout area of your Shopify admin.
Register                  | *page=register*        | Shows the customer register page. It's accessible only if you've enabled customer accounts in the Settings > Checkout area of your Shopify admin.
Reset Password            | *page=reset-password*  | Page allowing customer to reset its password. Includes the customer login page. It's accessible only if you've enabled customer accounts in the Settings > Checkout area of your Shopify admin.
Order                     | *page=order*           | This page shows the details of an Order place by your customers
Addresses                 | *page=addresses*       | Includes the customer's shipping addresses. It's accessible only if you've enabled customer accounts in the Settings > Checkout area of your Shopify admin.
Default                   | *page=default*         | Template page by default. 
Template                  | *page=template*        | It's a template that can be used in any page that you create in the Pages section of your Shopify admin
Remove                    | *page=remove*          | It's a page you don't want to convert

This may seem tricky but we did our best to make your workflow smoother so custom attributes are required only for some pages. In fact a lot of pages are automatically recognized as stated below:

### Automatically Recognized Pages
Some pages are automatically recognized based on their name and they do not need any attribute in their Body element: 

**Page Name** | **Page Type**
------------- | ----------------------
Index         | Home 
404           | Not found 
Password      | 401 
Search        | Search results 

#### Automatically Recognized CMS Pages
The list below indicates CMS pages that are automatically recognized based on their name and they do not need any attribute in their Body element:

**Page Name**                   | **Page Type**
-------------                   | ----------------------
detail_product                  | Product 
detail_category                 | Collection 
detail_article                  | Article 
detail_post                     | Article 
detail_sku                      | Remove
checkout                        | Remove
order-confirmation              | Remove

**NB:** CMS pages are named with the prefix **detail_** followed by the singular name of your CMS collection by Webflow itself. For example, **detail_product** and **detail_category** pages are created by Webflow if you enable e-commerce and you find them with the names **Products Template** and **Categories Template** in Webflow pages menu.

All pages without attribute that are not CMS related are automatically recognized as **Template**.
Otherwise you can define the page type by inserting the required attribute in the Body of the Webflow page, following the schema below:

**N.B:** All CMS pages that cannot be automatically recognized *must* have the correct attribute on the Body element, otherwise the template will not be converted.

## Page Links
Some pages cannot be linked directly from Webflow because they are dymanic:

> collection
>
> product


If you want to link a specific **Collection** use the attribute:

> collection-link={handle}


To link the **Product page** use the attribute:

> product-link={handle}


Let us pause on how to link a **Template page.** It is automatically linked if its handle on Webflow matches with the corresponded handle on Shopify. Otherwise you need to insert this attribute:

> page-link={handle}

**Don't forget that Template pages must be created in Shopify!**

Other pages are not linkable at all because they are dynamic or accesible only from email link::

> article
>
> search
>
> activate
>
> gift-card
>
> reset-password
>
> default-page
