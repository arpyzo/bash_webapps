$(document).ready(function() {
    $("#add").click(function() {
        if (file != null) {
            ajaxAppend(file, $("#new-link").val());
        }
    });
});

function ajaxAppend(file, link) {
    $.ajax({
        type: 'POST',
        url: 'cgi/append_file.cgi',
        contentType: 'text/plain',
        data: { filename: file, line: link },
        success: function() { appendLinkDiv(link); $("#new-link").val(''); },
        error: function(data, status, error) { alert("AJAX fail!\nStatus: " + status + "\nError: " + error); }
    });
}
