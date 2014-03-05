// Scroll distance
const scrollWidth  = 40;
const scrollHeight = 40;

// Window size
var windowWidth  = window.innerWidth;
var windowHeight = window.innerHeight;
window.onresize = function() {
    windowWidth  = window.innerWidth;
    windowHeight = window.innerHeight;
}

// Key press
document.onkeypress = function() {
    switch (event.keyCode) {

    // Vertical
    case 14:
        // C-n
        window.scrollBy(0, scrollHeight);
        break;
    case 16:
        // C-p
        window.scrollBy(0, -scrollHeight);
        break;
    case 22:
        // C-v
        window.scrollBy(0, windowHeight-scrollHeight);
        break;
    case 8730:
        // M-v
        window.scrollBy(0, -windowHeight+scrollHeight);
        break;
    case 175:
        // M-<
        window.scrollBy(0, -document.body.scrollHeight);
        break;
    case 728:
        // M->
        window.scrollBy(0, document.body.scrollHeight);
        break;

    // Horizontal
    case 6:
        // C-f
        window.scrollBy(scrollWidth, 0);
        break;
    case 2:
        // C-b
        window.scrollBy(-scrollWidth, 0);
        break;
    case 402:
        // M-f
        window.scrollBy(windowWidth-scrollWidth, 0);
        break;
    case 8747:
        // M-b
        window.scrollBy(-windowWidth+scrollWidth, 0);
        break;
    case 1:
        // C-a
        window.scrollBy(-document.body.scrollWidth, 0);
        break;
    case 5:
        // C-e
        window.scrollBy(document.body.scrollWidth, 0);
        break;
    }
}
