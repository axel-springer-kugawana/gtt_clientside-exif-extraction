# Clientside EXIF data extraction from images 

A JavaScript library for reading [EXIF meta data](https://en.wikipedia.org/wiki/Exchangeable_image_file_format) from image files.

This library is a simplified wrapper for easly using the open source library available @ https://github.com/exif-js/exif-js

## About this project
This project contains a small javascript library (EXIFImage.js) used to extract EXIF data from images within the browser.
This is mainly used for extracting the geo location from an image if available.
This data can then be uploaded with the image as separate parameters to be stored separatly and associated with the image.

**Note**: The EXIF standard applies only to `.jpg` and `.tiff` images. EXIF logic in this package is based on the EXIF standard v2.2 ([JEITA CP-3451, included in this repo](/spec/Exif2-2.pdf)).

**Note** Not all images will contain geo location, for geo location to be available the user must allow the phones camera to use its location and must have his GPS active at the moment the camera was used to take the photo.

## Documentation
Documentation for this project can be found in its Github wiki @ https://github.com/axel-springer-kugawana/gtt_clientside-exif-extraction/wiki

## Cloning the project
``` git clone git@github.com:axel-springer-kugawana/gtt_clientside-exif-extraction.git ```

## License
EXIFImage.js The MIT License (MIT)  Copyright (c) 2018 Gur Zeevi
Exif.js The MIT License (MIT) Copyright (c) 2008 Jacob Seidelin

## Author(s)
EXIFImage.js Gur Zeevi gur.zeevi@axelspringer.com
Exif.js Jacob Seidelin
