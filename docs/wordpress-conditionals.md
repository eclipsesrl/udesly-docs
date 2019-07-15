---
id: wordpress-conditionals   
title: Conditional Elements
---

## Generic Conditions

This kind of attribute can be used on every element to show or hide it, based on specific conditions.

> show-if={condition}

It shows the item if the specific condition is met.

> hide-if={condition}

It hides the item if the specific condition is met.

### Logged In

This condition is resolved as true if the user visiting your site is Logged In.

**e.g.**

> show-if=logged-in

> hide-if=logged-in

Shows/hides the element where you added this attribute only if the user is logged in.

### Dynamic Box

This condition is resolved as true if the current page has a not empty Dynamic Box.

> show-if=dynamic-box

> hide-if=dynamic-box

Shows/hide the element where you added this attribute only if the Dynamic Box is not empty.

## Rules Conditions

Rules are functionalities that allow to create specific conditions, manageable from the Udesly WP plugin.

Attributes are:

> show-if:rule={slug of the rule}

> hide-if:rule={slug of the rule}

**e.g.**

You've created a rule named *Category is shoes*. To show elements only when this rule is met, add the attribute:

> show-if:rule=category-is-shoes

Otherwise, if you want to hide elements when the rule is met, add the attribute:

> hide-if:rule=category-is-shoes

## ACF Conditions

> show-if:acf={slug of the acf field}

> hide-if:acf={slug of the acf field}

**e.g.**

You've created an ACF field named *Custom Text*. To show elements only when this ACF is set, add the attribute:

> show-if:acf=custom-text

Otherwise, if you want to hide elements when the ACF is set, add the attribute:

> hide-if:acf=custom-text

## Custom Fields Conditions

> show-if:cf={slug of the custom field}

> hide-if:cf={slug of the custom field}

**e.g.**

You've created an Custom field named *Custom Text*. To show elements only when this Custom Field is set, add the attribute:

> show-if:cf=custom-text

Otherwise, if you want to hide elements when the Custom Field is set, add the attribute:

> hide-if:cf=custom-text

## WooCommerce Conditions

This kind of attribute can be used on every element to show or hide it, based on specific conditions related to WooCommerce.

> show-if:wc={condition}

It shows the item if the specific condition is met.

> hide-if:wc={condition}

It hides the item if the specific condition is met.

### Upsells

This condition is resolved as true if the current product has upsells.

> show-if:wc=upsells

> hide-if:wc=upsells

### Related

This condition is resolved as true if the current product has related products.

> show-if:wc=related

> hide-if:wc=related

### Rating

This condition is resolved as true if the current product has rating.

> show-if:wc=rating

> hide-if:wc=rating

### On Backorder

This condition is resolved as true if the backorder feature is available for a given product.

> show-if:wc=on-backorder

> hide-if:wc=on-backorder

### Backorder allowed

This condition is resolved as true if the backorder feature is enabled, regardless of the presence or absence of a product in stock.

> show-if:wc=backorder-allowed

> hide-if:wc=backorder-allowed

## In Stock

This condition is resolved as true if a given product is in stock.

> show-if:wc=in-stock

> hide-if:wc=in-stock



