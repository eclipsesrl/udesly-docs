---
id: shopify-optional-filters
title: Optional Filters
---

Through the documentation you will find several elements with optional attributes that can be used to modify the Shopify behaviour for that element, below you will find an explanation about these filters settings and what they means.


## Image Filters

For some images, if stated in the correspective documentation you can add the following attributes:

### Dimension

> dimension={dimension}

This filter allows to modify the dimension of the image and can have different values. You can specify exact dimensions in pixels for an image's width and height, up to a maximum of 5760 x 5760 px. No matter what size you specify, an image can never be resized to be larger than its original dimensions.

* **{width}x{height}**: e.g 300x400 sets the image dimension to 300px of width and 400px height
* **{width}x**: e.g 300x sets the width to 300px and height is calculated according aspect ratio
* **x{height}**: e.g x500 sets the height to 500px and the width is calculated according aspect ratio
* **master**: returns the original dimension of the image


### Scale

> scale={scale}

The scale parameter lets you specify the pixel density of the image. Valid options are:

* **2**
* **3**

### Format

The format parameter lets you specify what file format to use for the displayed image. Valid options are:

* **jpg**
* **pjpg**

### Crop

You can specify a crop parameter to make sure that the resulting image's dimensions match the requested dimensions. If the entire image won't fit in your requested dimensions, the crop parameter specifies what part of the image to show. Valid options are:

* **top**
* **center**
* **bottom**
* **left**
* **right**


## Date Filters


### Date Format

> format={format}

Converts a timestamp into another date format.

This attribute accepts the same parameters as *Ruby's strftime method*. You can find a list of the shorthand formats in Ruby's documentation or use a site like [strfti.me](http://www.strfti.me/)
