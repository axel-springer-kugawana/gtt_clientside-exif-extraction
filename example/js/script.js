// ******************************************************************************************************
// Description: Example code for using EXIFImage.js for extracting basic EXIF data from jpg/tiff images
// Creation date: 19/11/2018
// Version: 1.0
// Written by Gur Zeevi
// ******************************************************************************************************

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
    getThumbnailCallback: function(imageURL){
        if(imageURL != null) {
            var thumbnailHolder = document.getElementById("thumbnail_holder");
            thumbnailHolder.style.display = "block";
            thumbnailHolder.src = imageURL;
        }
    }

}
