---
id: shopify-search-page
title: Search Results Page
---

The following elements can be added only in a page set as **Search page**.


##### Results Count
This is the number of the results found. Insert a Text item and add the attribute:

> search=results-count

##### Terms
This element indicated the searched terms. Insert a text item and add the attribute:

> search=terms

##### Results
You can't use webflow search results cause they are not exported, so create a new Collection and insert the following attribute On Collection List Wrapper:

> search=results

For items you can use inside Collection List Item go to search-items.md

#### Search Forms
All search forms are automatically converted without attributes.