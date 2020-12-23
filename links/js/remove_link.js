function removeLink(linkNum) {
    if (file != null) {
        link = $('#link-' + linkNum).attr('href');
        ajaxRemove(file, linkNum, link);
    }
}

function ajaxRemove(file, linkNum, link) {
    $.ajax({
        type: 'POST',
        url: 'cgi/remove_file_line.cgi',
        contentType: 'text/plain',
        data: { filename: file, line: link },
        success: function() { removeLinkDiv(linkNum); },
        error: function(data, status, error) { alert("AJAX fail!\nStatus: " + status + "\nError: " + error); }
    });
}
