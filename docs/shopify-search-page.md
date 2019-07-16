---
id: shopify-search-page
title: Search Results Page
---

The following elements can be added only in the page **Search Results** of Webflow that gets automatically created when you add a search form on a page

## Results Count
This is the number of the results found. Insert a Text item and add the attribute:

> search=results-count

## Terms
This element indicated the searched terms. Insert a text item and add the attribute:

> search=terms

## Results
You can't use webflow search results cause they are not exported, so create a new Collection and insert the following attribute On Collection List Wrapper:

> search=results

All the elements you can add in the Collection Item are available below:

- ### Date
    It is the date of publication of the search result. Insert a text element and enter the attribute:

    > item=date

    To handle the date format, you can use the following optional attribute:

    > [format={date-format}](shopify-optional-filters#date-format)

    *For further info on how to set this optional attribute, please take a look on this [document](shopify-optional-filters)*

- ### Featured Image
    It's the featured image of the search result. It can be added to an image or to any other element as background image, will also add the link if set on a link block.
    Insert the attribute:

    > item=featured-image

    To handle featured image settings, there are several optional attributes you can use.

    > [dimension={dimension}](shopify-optional-filters#dimension)

    > [scale={scale}](shopify-optional-filters#scale)

    > [format={format}](shopify-optional-filters#format)

    > [crop={crop}](shopify-optional-filters#crop)

    *For further info on how to set these optional attributes, please take a look on this [document](shopify-optional-filters)*

- ### Title
    It's the title of the search result and can be added to any text element, will also add the link if set on a link text.
    Insert the attribute:

    > item=title

- ### Link
    It's the link to the search result and can be added to any a element.
    Insert the attribute:

    > item=link

- ### Excerpt
    It's the excerpt of the search result and can be added to any text element.
    Insert the attribute:

    > item=excerpt

- ### Author Email
    It can be set on a text element or a link, if set on a link it will be a mailto:
    Insert the attribute:

    > item=author-email

