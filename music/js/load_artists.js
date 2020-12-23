$(document).ready(function() {
    ajaxGetArtists();
});

function ajaxGetArtists() {
    $.ajax({
        type: 'GET',
        url: 'cgi/list_artists.cgi',
        success: function(artists) { displayArtists(artists); },
        error: function(data, status, error) { alert("AJAX fail!\nStatus: " + status + "\nError: " + error); }
    });
}

function displayArtists(artists) {
    var artistArray = artists.split('\n');
    artistArray.forEach(function(artist) {
        $('#artists').append('<div>' + artist + '</div>');
    });
}
