Application = {

    onFileSelected: function (fileInput) {

        this.clear();

        var files = fileInput.files;
        if (files.length > 0) {
            var file = files[0];

            var img = new EXIFImage(file);
            img.getThumbnail(this.getThumbnailCallback);
            img.getEXIFData(this.getExifDataCallback);
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

    getGeoCoordinatesCallback: function(data){
        if(data != null) {
            var encodedData = JSON.stringify(data);
            var geoCoordHolder = document.getElementById("geo_coord_holder");
            geoCoordHolder.style.display = "block";
            geoCoordHolder.innerHTML = encodedData;
        }
    },

    getExifDataCallback: function(data){
        if(data != null) {
            var encodedData = JSON.stringify(data);
            var exifHolder = document.getElementById("exif_holder");
            exifHolder.style.display = "block";
            exifHolder.innerHTML = encodedData;
        }
    },

    getThumbnailCallback: function(imageURL){
        if(imageURL != null) {
            var thumbnailHolder = document.getElementById("thumbnail_holder");
            thumbnailHolder.style.display = "block";
            thumbnailHolder.src = imageURL;
        }
    }

}
