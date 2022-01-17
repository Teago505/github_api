function getJson(url) {
    var request = new XMLHttpRequest();
   
    request.open('get', url, false);
    request.send(null);
   
    if (request.status >= 200 && request.status < 300) {
        return JSON.parse(request.responseText);
    } else if (request.status == 404) {
        return request.status;
    }
}