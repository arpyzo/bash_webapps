function appendLinkDiv(link) {
    $('#links').append('<div id="div-' + nextLinkId + '"></div>');
    $('#div-' + nextLinkId).append('<button id="remove-' + nextLinkId + '" type="button">Remove</button>');
    $('#div-' + nextLinkId).append('<a id="link-' + nextLinkId + '" href="' + link  + '">' + link + '</a><br><br>');

    $("#remove-" + nextLinkId).click(function() {
        removeLink(this.id.substring(7));
    });

    nextLinkId++;
}

function removeLinkDiv(linkNum) {
    $('#div-' + linkNum).remove();
}
