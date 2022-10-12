import "./App.css";
import { useEffect, useRef } from "react";

const imgData = [
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300",
        class: "",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-400,h-300",
        class: "",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image3.jpg?tr=w-400,h-300",
        class: "",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300",
        class: "lazy",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300",
        class: "lazy",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300",
        class: "lazy",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-400,h-300",
        class: "lazy",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-400,h-300",
        class: "lazy",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image9.jpeg?tr=w-400,h-300",
        class: "lazy",
    },
    {
        alt: "xxx",
        src: "https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300",
        class: "lazy",
    },
];
function App() {
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
    return (
        <div className="App">
            {imgData.map((val, i) => (
                <img
                    key={i}
                    ref={(element) =>
                        val.class === "lazy" && imgRef.current.push(element)
                    }
                    className={val.class}
                    alt={val.alt}
                    src={val.class === "lazy" ? null : val.src}
                    data-src={val.src}
                />
            ))}
        </div>
    );
}

export default App;
