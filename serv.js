function getMeta(url, callback) {
    console.log("getmetta")
    var width="hello";
    var height="hello2";
    setTimeout (function() { 
        console.log("time")
        callback(width, height);
    },10000)
}
var useurl="srini"
getMeta(useurl, function (width, height) {
    console.log("width :", width, "height :", height);
    console.log("callback");

});

