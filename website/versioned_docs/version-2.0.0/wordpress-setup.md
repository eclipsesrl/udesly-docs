---
id: version-2.0.0-wordpress-setup
title: How the Adapter works
original_id: wordpress-setup
---

With the Udesly Adapter you can connect Webflow to WordPress. How? Design your site in Webflow (you can start either rom scratch or from any other Weblow template) and then convert it to a real WordPress theme in a few steps. 

In order to have a Webflow template ready to be converted to a WordPress one, you have to add  custom attributes to specific pages and elements in your Webflow project. 
Custom attributes provide additional information about an element. When added to the pages in in your Webflow project, they allow a proper conversion of that project to WordPress. 
More specifically you need to add custom attributes:

1. to some pages of your Webflow project. The custom attribute allows our Adapter app to correctly identify the page type and convert it to WordPress. For example to have the product page you designed in Webflow properly converted to WordPress, you need to add “page=product” to the body of your product page in Webflow. 


<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>

Find [here](wordpress-pages-structure) a complete list of the pages that you need to add custom attributes to.

2. to the elements in the pages of your Webflow project. As with the pages, custom attributes are essentials to have all the page elements you designed in Webflow correctly converted to WordPress. 

<video autoplay muted playsinline="true" loop>
<source src="/assets/custom-attribute.webm">
</video>
