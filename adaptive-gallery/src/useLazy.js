import { useEffect, useRef } from "react";

export const useLazy = () => {
    const imgRef = useRef([]);

    useEffect(() => {
        let lazyLoadThrottleTimeout;
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) clearTimeout(lazyLoadThrottleTimeout);

            lazyLoadThrottleTimeout = setTimeout(function () {
                let scrollTop = window.pageYOffset;
                imgRef.current.forEach(function (img) {
                    if (img.offsetTop < window.innerHeight + scrollTop)
                        img.src = img.dataset.src;
                });
                if (imgRef.current.length === 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationChange", lazyLoad);
                }
            }, 20);
        }
        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationChange", lazyLoad);
    }, [imgRef]);
    return { imgRef };
};
