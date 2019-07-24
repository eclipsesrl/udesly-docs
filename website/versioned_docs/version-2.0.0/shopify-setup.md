---
id: version-2.0.0-shopify-setup
title: How the Adapter works
original_id: shopify-setup
---

With the Udesly Adapter you can connect Webflow to the Shopify e-commerce platform. How? Design your e-commerce in Webflow (you can start either rom scratch or from any other Weblow template) and then convert it to a real Shopify theme in a few steps. 

In order to have a Webflow template ready to be converted to a Shopify one, you have to add  custom attributes to specific pages and elements in your Webflow project. 
Custom attributes provide additional information about an element. When added to the pages in in your Webflow project, they allow a proper conversion of that project to Shopify. 
More specifically you need to add custom attributes:

1. to some pages of your Webflow project. The custom attribute allows our Adapter app to correctly identify the page type and convert it to Shopify. For example to have the product page you designed in Webflow properly converted to Shopify, you need to add “page=product” to the body of your product page in Webflow. 


<video autoplay muted playsinline="true" loop>
<source src="/assets/page-type.webm">
</video>

Find [here](shopify-pages-structure) a complete list of the pages that you need to add custom attributes to.

2. to the elements in the pages of your Webflow project. As with the pages, custom attributes are essentials to have all the page elements you designed in Webflow correctly converted to Shopify. 

<video autoplay muted playsinline="true" loop>
<source src="/assets/custom-attribute.webm">
</video>

If you’re designing your template from scratch, we suggest using our pre-configured [elements pack](https://preview.webflow.com/preview/webflow-to-shopify-elements?utm_medium=preview_link&utm_source=designer&utm_content=webflow-to-shopify-elements&preview=71280fc62c37d44b2222bbe7b9a3e953&mode=preview) while designing your pages in Webflow. This will help you quicken your workflow because you find the required attributes already added to the element you want to design in your page and ready to be converted to Shopify after you export the HTML project from Webflow. 

If you start from a pre-made template, the quicker workflow is to add the custom attributes manually following our doc. 