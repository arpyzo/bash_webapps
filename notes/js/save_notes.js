$(document).ready(function() {
    $("#save").click(function() {
        if (file != null) {
            ajaxSave(file, $("#notes").val());
        }
    });
});

function ajaxSave(file, text) {
    $.ajax({
        type: 'POST',
        url: 'cgi/save_file.cgi',
        contentType: 'text/plain',
        data: { filename: file, content: text },
        //success: function() { alert("AJAX success!"); },
        error: function(data, status, error) { alert("AJAX fail!\nStatus: " + status + "\nError: " + error); }
    });
}
