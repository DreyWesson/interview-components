import { useEffect, useRef } from "react";
import { elementInViewport2 } from "./viewportObserver";

export const useLazy = () => {
    const imgRef = useRef([]);

    useEffect(() => {
        let lazyLoadThrottleTimeout;
        function lazyLoad(ref) {
            if (lazyLoadThrottleTimeout) clearTimeout(lazyLoadThrottleTimeout);
            lazyLoadThrottleTimeout = setTimeout(function () {
                if (Array.isArray(ref)) {
                    imgRef.current.forEach(
                        (img) =>
                            "IntersectionObserver" in window &&
                            elementInViewport2(img)
                    );
                } else {
                    "IntersectionObserver" in window && elementInViewport2(ref);
                }

                if (imgRef.current.length === 0) {
                    document.removeEventListener("scroll", () =>
                        lazyLoad(imgRef.current)
                    );
                    window.removeEventListener("resize", () =>
                        lazyLoad(imgRef.current)
                    );
                    window.removeEventListener(
                        "orientationChange",
                        lazyLoad(imgRef.current)
                    );
                }
            }, 20);
        }
        document.addEventListener("scroll", () => lazyLoad(imgRef.current));
        window.addEventListener("resize", () => lazyLoad(imgRef.current));
        window.addEventListener("orientationChange", () =>
            lazyLoad(imgRef.current)
        );
    }, [imgRef]);
    return { imgRef };
};
