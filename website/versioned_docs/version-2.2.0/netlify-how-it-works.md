---
id: version-2.2.0-netlify-how-it-works
title: How it works
original_id: netlify-how-it-works
---

Netlify is an All-in-one platform for automating modern webproject. With the Udesly Adapter you can deploy and manage your Webflow template, inclusive of its CMS, with Netlify.

![](assets/jamstack.svg)

Design your template in Webflow and insert all the custom attributes you need to make it manageable with Netlify.
Check this guide to see attributes available! (LINK)

Remember to export CSV of your CMS data. 

![](assets/netlify-export-csv.png)

You are now ready to export the Webflow template.

![](assets/netlify-export.png)

Once everything is ready on Webflow side, take the template through the Udesly Adapter and start the conversion, including exported CSVs as well.

![](assets/netlify-convert.png)

Once converted, you have 2 different options available:

![](assets/upload-github.png)

### Upload to Github

You can upload it to Github and then connect it to Netlify. Click to **Upload to Github** button. If you don't have a Github account already, please check this [guide](https://help.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account) to address this problem. 

The Adapter is going to upload the repository on Github automatically.

Now, through Github, you are able to proceed on the latest step of the process, on Netlify side. 
**Only the first time**, you have to create a Netlify CMS account in order to have control over the Webflow CMS. Choose the repository and connect it to Github.

![](assets/netlify-github.png)

Once Github and Netlify have been connected to each other, the latter will deploy your site, inclusive of CMS, automatically.

![](assets/netlify-deploy.png)

It's done. In just a few steps you have created a full static site on Webflow!

In the meantime Netlify is building your site, keep in mind these recommendations:

Go to **Settings-->Identity** and click on **Enable Identity**.

![](assets/netlify-identity.png)

Here, new tabs will open. Under **Registration preferences** choose **Invite only**.

![](assets/netlify-registration.png)

Then, go to the bottom of the same page and click on **Enable Git Gateway** under **Services**.

![](assets/netlify-git-gateway.png)

Finally go to **Identity** from the main menu and click on **Invite users** to make certain email addresses able to access the backend of the site. Netlify's free tier allows to add 5 email addresses at most.

![](assets/netlify-invite.png)

Last important thing to see is how to add a custom domain to your site. Check this [guide](https://docs.netlify.com/domains-https/custom-domains/#assign-a-domain-to-a-site).

### Download Zip

If you want to host your site on your preferred provider, click on **Download Zip** button after the conversion and the Adapter will issue a .zip file that is an [11ty](https://www.11ty.dev/) project. You have to build it in order to upload it to your hosting provider, such as Amazon S3, Firebase, Netlify or Zeit.  Please check this [guide](https://www.11ty.dev/docs/tutorials/) to see how to use 11ty.
