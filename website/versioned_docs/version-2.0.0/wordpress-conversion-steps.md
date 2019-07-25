---
id: version-2.0.0-wordpress-conversion-steps
title: Conversion Steps
original_id: wordpress-conversion-steps
---
Follow this short guide to convert a Webflow project to a functioning WordPress template.

**To make the following conversion process effective, make sure you have entered in Webflow all the custom attributes required.** 

## Export & Convert

Once your design is finished, the page types and the page elements are defined with their attributes, you can finally export your template.

<video autoplay muted playsinline="true" loop>
<source src="/assets/export-code.webm">
</video>

## Upload to the Adapter

Open the Udesly Adapter Web APP you can find on [udesly.com](https://www.udesly.com/) and choose the WordPress section to upload your template.

Upload the .zip file of the template you've exported from Webflow, insert template data (template name, author name, template description) and start the conversion.

<video autoplay muted playsinline="true" loop>
<source src="/assets/webflow-to-wordpress.webm">
</video>

If you forgot to add some attributes or added the wrong ones, the conversion process will end with an error message like the one in the screenshot.

![](assets/webflow-to-wordpress-error.png)

 You’ll find all the missing attributes and the wrong ones that you’re required to fix. This will help you go back to your project and correct everything to launch a new, successful, conversion. 

## Upload and activate the theme in WordPress

Once the conversion is ended you can download the converted template (zip file) on your pc.

Now you can upload the converted theme (.zip file) from your WordPress admin panel. Go to Appearance -> Themes and then click on the “Upload Theme” button.

![](assets/wordpress-upload-theme.jpg)

![](https://cdn.WordPresscloud.com/help/assets/manual/themes/theme-trial-c28b73490b7aa6a7a463d5582c250f6e1727f19e52e6699a8ce69ec7720754a2.png)

**Don't forget to Activate the Theme**

> Don't forget that you if you have old Udesly Adapter plugin, you have to delete it before installing the new version

To see how to install the plugin follow this [guide](wordpress-plugin-setup)

## Import Data
This is the most important section. After the template upload and activation, you have to synchronize the template content. From the "Import from Webflow" section you can find the "Import data" button to synchronize the Webflow template content with WordPress. You can also delete all the imported pages or frontend editor elements. From the side menu you can check your missed elements and custom fields.

![](assets/wordpress-import-data.png)

Remember to set the homepage and the Posts page of your site following this path: *Settings > Reading > Your homepage displays.*

![](assets/page-setting.png)

