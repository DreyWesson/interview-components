import "./App.css";
import { imgData } from "./data";
import { useLazy } from "./useLazy";
import { useRef } from "react";

function App() {
    // RESOURCES
    // https://css-tricks.com/tips-for-rolling-your-own-lazy-loading/
    // https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
    // https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport

    const { imgRef } = useLazy();
    const initImageLoad = useRef(2).current;

    return (
        <div className="App">
            {imgData.map((val, i) => (
                <img
                    key={i}
                    ref={(element) =>
                        i > initImageLoad && imgRef.current.push(element)
                    }
                    alt={val.alt}
                    src={i > initImageLoad ? null : val.src}
                    data-src={val.src}
                />
            ))}
        </div>
    );
}

export default App;
