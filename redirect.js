var myPages = [];

function isMyPage(pageID) {
    var n = myPages.length;
    for (var i = 0; i < n; i++) {
        var p = myPages[i];
        if (p == pageID) {
            return true;
        }
    }
    return false;
}

// https://presstige.io/p/Typescript-basics-395f6c6af50d44e48919a45fcc064d3e
// =>
// https://www.notion.so/Typescript-basics-395f6c6af50d44e48919a45fcc064d3e
function redirect() {
    var loc = window.location;
    console.log("loc:", loc.toString());
    var pathname = loc.pathname;
    if (!pathname.startsWith("/p/")) {
        console.log("not redirecting this page");
        return;
    }

    var newPath = pathname.substr("/p/".length);
    var parts = newPath.split("-");
    var pageID = parts[parts.length-1];
    var newURL = "https://www.notion.so/" + newPath    
    if (isMyPage(pageID)) {
        newURL = "https://blog.kowalczyk.info/article/" + pageID + "/";
    }
    console.log("redirecting to: ", newURL);
    window.location = newURL;
}
redirect();
