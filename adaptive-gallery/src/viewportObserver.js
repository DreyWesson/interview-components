export function elementInViewport2(el) {
    // SOURCE
    // https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
    const observer = new window.IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                // console.log("ENTER");
                el.src = el.dataset.src;
                return;
            }
            // console.log("LEAVE");
        },
        {
            root: null,
            threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        }
    );
    observer.observe(el);
}

export function elementInViewport1(el) {
    // SOURCE
    // https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
    console.log(el);
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    const result =
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset;

    if (result) el.src = el.dataset.src;
    return;
}
