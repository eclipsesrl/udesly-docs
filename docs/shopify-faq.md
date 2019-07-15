---
id: shopify-faq
title: Frequently Asked Questions
---

## How can I create Shopify pages?

To create Shopify pages you have to follow 2 steps:
- Create a template page in Webflow;
- Create the page in Shopify and assign the corresponded template from the template selector.

Check this Shopify guide for further [info](https://help.shopify.com/en/manual/sell-online/online-store/pages).

## Why account pages do not show up?

By default, Shopify has account pages disabled. You can enable them by clicking on [Settings-->Checkout](https://www.shopify.com/admin/settings/checkout) from your Shopify admin panel and choose a Customer Account option between:

- Accounts are Optional
- Accounts are Required

## How to create dynamic sections?

To create dynamic sections, you have to create a section in the home page and enter the attribute

> dynamic=true 

N.B: Remember that if you create a dynamic section you MUST set in the home page a div container with attribute 

> item=content-for-index

this is the place where all the sections added to the page will be shown.

## Where to change my templates settings?

- From your Shopify admin, go to *Online Store > Themes*.
- Find the theme that you want to edit and click *Customize*.

## Why can't I customize the Checkout?

Basic Shopify Accounts are not allowed to modify Checkout template, but they can customize the checkout page in the theme editor. The checkout.liquid asset is available to *Shopify Plus* merchants only and requires manual intervention whenever Shopify makes an upgrade.

## I copied Blog Articles from the Elements pack, why they don't show up?

The Blog articles creates a Blog picker, so you have to select a Blog following the path *Online Store > Themes > Customize > Theme settings*.

## I copied Shop Products from the Elements pack, why they don't show up?

The Shop products creates a Collection picker, so you have to select a Collection following the path *Online Store > Themes > Customize > Theme settings*.




