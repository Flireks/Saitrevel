
(function() {

    function scrollHorizontally(e) {
        e = window.event || e;
        const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.rewiews__cards').scrollLeft -= (delta*100);
        e.preventDefault();
    }
    if (document.querySelector('.rewiews__cards').addEventListener) {
        document.querySelector('.rewiews__cards').addEventListener("mousewheel", scrollHorizontally, false);
        document.querySelector('.rewiews__cards').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        document.querySelector('.rewiews__cards').attachEvent("onmousewheel", scrollHorizontally);
    }

})();