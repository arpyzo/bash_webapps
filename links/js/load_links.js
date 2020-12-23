$(document).ready(function() {
    nextLinkId = 1;

    file = urlParam('file');
    if (file != null) {
        ajaxLoad(file);
    }
});

function ajaxLoad(file) {
    $.ajax({
        type: 'GET',
        url: 'cgi/load_file.cgi?file=' + file,
        success: function(links) { displayLinks(links); },
        error: function(data, status, error) { alert("AJAX fail!\nStatus: " + status + "\nError: " + error); }
    });
}

function displayLinks(links) {
    if (links.startsWith('Can\'t find links file: ')) {
        $('#links').append(links);
        return;        
    }

    var linkArray = links.split('\n');
    for(var i = 0; i < linkArray.length; i++) {
        if (linkArray[i]) {
            appendLinkDiv(linkArray[i]);
        }
    }
}
