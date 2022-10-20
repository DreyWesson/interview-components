import { useEffect, useRef } from "react";
import { elementInViewport2 } from "./viewportObserver";

export const useLazy = () => {
    const imgRef = useRef([]);

    useEffect(() => {
        let lazyLoadThrottleTimeout;
        function lazyLoad(ref) {
            if (lazyLoadThrottleTimeout) clearTimeout(lazyLoadThrottleTimeout);
            lazyLoadThrottleTimeout = setTimeout(function () {
                Array.isArray(ref)
                    ? ref.forEach(
                          (img) =>
                              "IntersectionObserver" in window &&
                              elementInViewport2(img)
                      )
                    : "IntersectionObserver" in window &&
                      elementInViewport2(ref);

                if (imgRef.current.length === 0) {
                    document.removeEventListener("scroll", () => lazyLoad(ref));
                    window.removeEventListener("resize", () => lazyLoad(ref));
                    window.removeEventListener(
                        "orientationChange",
                        lazyLoad(ref)
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
