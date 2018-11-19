# Clientside EXIF data extraction from images 

A JavaScript library for reading [EXIF meta data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format) from image files.

This library is a simplified wrapper for easly using the open source library available @ https://github.com/exif-js/exif-js

**Note**: The EXIF standard applies only to `.jpg` and `.tiff` images. EXIF logic in this package is based on the EXIF standard v2.2 ([JEITA CP-3451, included in this repo](/spec/Exif2-2.pdf)).

## Documentation
Documentation for this project can be found in its Github wiki @ https://github.com/axel-springer-kugawana/gtt_clientside-exif-extraction/wiki

## Description
This project contains a small javascript library (EXIFImage.js) used to extract EXIF data from images within the browser.
This is mainly used for extracting the geo location from an image if available.
This data can then be uploaded with the image as separate parameters to be stored separatly and associated with the image.

## Use case
Extract image geo location from realestate images to be stored as image meta data and expand the listings search fields to contain location in cases where location was not added manually to the listing.

**Note** Not all images will contain geo location, for geo location to be available the user must allow the phones camera to use its location and must have his GPS active at the moment the camera was used to take the photo.

## Usage example
The project contains an example project with a simple html based website including the lib and javascript example to manipulate the lib.
In addition there is a sample image containing EXIF data called exif-example.jpg for use with the example project. 

## Code Example ##

**Note**:
In case you dont have an image with exif data there is one available with the project for testing called: exif-example.jpg

### HTML ###

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
### CSS  ###

``` CSS

#file_select_button{
    display: block;
    position: relative;
    margin: auto;
    margin-left: 20px;
    padding: 0 auto;

    width: 200px;
    height: 30px;

    float: left;

    font-family: Arial, Helvetica, Verdana, sans-serif;
    color: #ffffff;
    line-height: 30px;
    font-size: 14px;
    text-align: center;

    border-radius: 15px;
    background-color: #000000;

    cursor: pointer;
}

#file_select_button:hover{
    background-color: #606060;
}

#file_select_button:active{
    background-color: #000000;
}

#thumbnail_holder{
    display: none;
    position: absolute;
    margin: 0 auto;
    padding: 0px;

    width: 300px;
    height: auto;

    top: 70px;
    right: 20px;

    overflow: hidden;
}

#geo_coord_holder{
    display: block;
    position: absolute;
    margin: auto;
    padding: 0 auto;

    width: auto;
    height: 30px;

    top: 10px;
    right: 20px;

    font-family: Arial, Helvetica, Verdana, sans-serif;
    color: #000000;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
}

#exif_holder{
    display: none;
    position: absolute;
    margin: auto;
    padding: 10px;

    width: calc(100% - 690px);
    height: auto;

    top: 70px;
    left: 20px;

    font-family: Arial, Helvetica, Verdana, sans-serif;
    color: #000000;
    line-height: 14px;
    font-size: 12px;
    text-align: left;
    word-wrap: break-word;

    border-radius: 15px;
    background-color: #ffffff;

    overflow-x: hidden;
    overflow-y: auto;
}

```
### Javascript  ###

``` Javascript

Application = {

    onFileSelected: function (fileInput) {

        this.clear();

        var files = fileInput.files;
        if (files.length > 0) {
            var file = files[0];

            // Initializing a new EXIFImage for the image file selected by the user
            var img = new EXIFImage(file);

            // Calling getThumbnail on the img object and passing a callback for the response.
            img.getThumbnail(this.getThumbnailCallback);

            // Calling getEXIFData on the img object and passing a callback for the response.
            img.getEXIFData(this.getExifDataCallback);

            // Calling getGeoCoordinates on the img object and passing a callback for the response.
            img.getGeoCoordinates(this.getGeoCoordinatesCallback);
        }
    },

    clear: function(){
        document.getElementById("thumbnail_holder").src = null;
        document.getElementById("thumbnail_holder").style.display = "none";
        document.getElementById("exif_holder").innerHTML = "";
        document.getElementById("geo_coord_holder").innerHTML = "";
    },

    // Callback Methods

    // This methods will return an object (JSON structure) with values for latitude and longitude or null if values are not available
    getGeoCoordinatesCallback: function(data){
        if(data != null) {
            var encodedData = JSON.stringify(data);
            var geoCoordHolder = document.getElementById("geo_coord_holder");
            geoCoordHolder.style.display = "block";
            geoCoordHolder.innerHTML = encodedData;
        }
    },

    // This method will return an object (JSON structure) with all available exif parameters or null on error or if none are available
    getExifDataCallback: function(data){
        if(data != null) {
            var encodedData = JSON.stringify(data);
            var exifHolder = document.getElementById("exif_holder");
            exifHolder.style.display = "block";
            exifHolder.innerHTML = encodedData;
        }
    },

    // This method will return an image object containing the thumbnail associated with the image
    getThumbnailCallback: function(image){
        if(image != null) {
            var thumbnailHolder = document.getElementById("thumbnail_holder");
            thumbnailHolder.style.display = "block";
            thumbnailHolder.src = image;
        }
    }

}

```
