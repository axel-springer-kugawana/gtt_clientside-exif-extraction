# Clientside EXIF data extraction from images 

A JavaScript library for reading [EXIF meta data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format) from image files.

This library is a simplified wrapper for easly using the open source library available @ https://github.com/exif-js/exif-js

**Note**: The EXIF standard applies only to `.jpg` and `.tiff` images. EXIF logic in this package is based on the EXIF standard v2.2 ([JEITA CP-3451, included in this repo](/spec/Exif2-2.pdf)).


## Description
This project contains a small javascript library used to extract EXIF data from images within the browser.
This is mainly used for extracting the geo location from an image if available.
This data can then be uploaded with the image as separate parameters to be stored separatly and associated with the image.

## Use case
Extract image geo location from realestate images to be stored as image meta data and expand the listings search fields to contain location in cases where location was not added manually to the listing.

**Note** Not all images will contain geo location, for geo location to be available the user must allow the phones camera to use its location and must have his GPS active at the moment the camera was used to take the photo.

## Usage example
The project contains an example project with a simple html based website including the lib and javascript example to manipulate the lib.
In addition there is a sample image containing EXIF data called exif-example.jpg for use with the example project. 

## Code Example ##

``` HTML
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>EXIF image extractor example project</title>
        <meta name="description" content="EXIF image extractor">
        <link rel="stylesheet" href="css/style.css?v=1.0">
        <script src="js/lib/EXIFImage.js?v=1.0"></script>
        <script src="js/script.js?v=1.0"></script>
    </head>

    <body>
        <div id="file_select_button" onclick="document.getElementById('file_select').click();">
            Please choose a file
            <input id="file_select" type="file" style="position:absolute;opacity:0;width: 100%;height: 100%" title="Please choose a file" style="font-color:#ffffff;" onchange="Application.onFileSelected(this);">
        </div>

        <br/>

        <div id="geo_coord_holder"></div>
        <img id="thumbnail_holder" />
        <div id="exif_holder"></div>
    </body>


</html>
```

``` CSS

```

``` Javascript

```
