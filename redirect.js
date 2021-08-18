var myPages = [
    "219cc979e826459a97ede99c7c7fb09b", "https://blog.kowalczyk.info/article/de13a71a392f488b9352b300b3ed722d/hide-header-on-scroll-in-svelte.html",
    "6fb283a94e604f879e0d97a5f788dee6", "https://blog.kowalczyk.info/article/6725311d5d03491a9442e1e0819bd901/dailyrotate-a-go-library-for-rotating-files-daily.html",
    "22143bf788b542fda2262ca7aee57ae4", "https://blog.kowalczyk.info/article/90f01e0e24924f6c8ed428f065c0016a/atomicfile-robustly-writing-to-a-file-in-go.html",
    "2567fcfa8f7a4ed4bdf6f6ec9298d34a", "https://blog.kowalczyk.info/article/c9df78cbeaae4e0cb2848c9964bcfc94/using-notion-api-go-client.html",
    "640bc842d8674a1b828b09365966bc82", "https://blog.kowalczyk.info/article/715712478e8d4dbab6b7c140c8f5e76e/whats-new-in-go-1.13.html",
    "6b51885c1f6940aeb40476000d0eb0fc", "https://blog.kowalczyk.info/article/4b1f9201181340099b698246857ea98d/using-go-instead-of-bash-for-scripts.html",
    "2ca9744b531f4f21bdae9976d1ccbb58", "https://blog.kowalczyk.info/article/8dd9c2c0413047c589a321b1ccba7129/using-github-actions-with-go.html",
    "d9b5194303e2447e912077fd666e2ecf", "https://blog.kowalczyk.info/article/3a6ae6190bdf49be88ef4e73b3445a0d/sending-emails-with-mailgun-in-go.html",
    "233de7fe59a747078b35b82a1b035d36", "https://blog.kowalczyk.info/article/e00e89c3841e4f8c8c769a78b8a90b47/logging-http-requests-in-go.html",
    "a5554f7b799f4608bbb7243b64433453", "https://blog.kowalczyk.info/article/9e1d7870e245477585d5e167d850f0a7/code-eval-documentation.html",
    "5a9e7ffbd2814d17a74589d1d9afc9af", "https://blog.kowalczyk.info/article/d80ac960197d4ce1bec59fab9a036581/about-code-eval.html",
    "7671bd72fce44e8d947683410c822f5c", "https://blog.kowalczyk.info/article/ee70251859bb4255bc7c1e7f2d54fa7c/syntax-of-codeeval.yml.html",
    "6d52e3c33c6a40d2aafa90ed71e0afe3", "https://blog.kowalczyk.info/article/d8b1588295b44428bddd154c67d452a0/supported-languages-for-playground.html",
];

function myPageRedirect(pageID) {
    var n = myPages.length;
    for (var i = 0; i < n; i += 2) {
        var p = myPages[i];
        if (p == pageID) {
            return myPages[i+1];
        }
    }
    return null;
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
    console.log("pageID: ", pageID);
    var newURL = myPageRedirect(pageID);
    if (newURL == null) {
        newURL = "https://www.notion.so/" + newPath
    }
    console.log("redirecting to: ", newURL);
    window.location = newURL;
}

redirect();