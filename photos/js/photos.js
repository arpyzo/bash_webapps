var photos;

async function getPhotos(url) {
    let response = await fetch(url);
    let photosListing = await response.text();

    photos = photosListing.split('\n').filter(function(line) {
        return RegExp(/^<li><a href/).test(line);
    });

    photos = photos.map(function(photo) {
        return photo.replace(/<li><a href="([^"]+)".+/, '$1');
    });

    //alert(photos.join("\n"));
    //return photos;
}

$(document).ready(function() {
    var photos = getPhotos('http://www.orbitry.com/photos/save');
});

$(document).click(function() {
    alert(photos.join("\n"));
    $('img').attr('src', 'save/zelda_fire.png');
});
