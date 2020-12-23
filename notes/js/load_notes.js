$(document).ready(function() {
    file = urlParam('file');
    if (file != null) {
        ajaxLoad(file);
    }
});

function ajaxLoad(file) {
    $.ajax({
        type: 'GET',
        url: 'cgi/load_file.cgi?file=' + file,
        success: function(text) { $("#notes").val(text); },
        error: function(data, status, error) { alert("AJAX fail!\nStatus: " + status + "\nError: " + error); }
    });
}
