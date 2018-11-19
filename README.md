# Clientside EXIF data extraction from images 

A JavaScript library for reading [EXIF meta data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format) from image files.

**Note**: The EXIF standard applies only to `.jpg` and `.tiff` images. EXIF logic in this package is based on the EXIF standard v2.2 ([JEITA CP-3451, included in this repo](/spec/Exif2-2.pdf)).


## Description
This project contains a small javascript library used to extract EXIF data from images within the browser.
This is mainly used for extracting the geo location from an image if available

## Usage example
The project contains an example project with a simple html based website including the lib and javascript example to manipulate the lib.
In addition there is a sample image containing EXIF data called exif-example.jpg for use with the example project. 
