function urlParam(param) {
    var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
       return null;
    } else {
       return decodeURI(results[1]) || 0;
    }
}
