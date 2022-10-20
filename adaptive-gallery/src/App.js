import "./App.css";
import { useLazy } from "./useLazy";
import { imgData } from "./imgData";
import { useRef } from "react";

function App() {
    const { imgRef } = useLazy();
    const initImageLoad = useRef(15).current;
    console.log(imgRef);

    return (
        <div className="App">
            <h1>
                <span style={{ color: "#FF0000" }}>P</span>
                <span style={{ color: "#66CC66" }}>h</span>
                <span style={{ color: "#FF9966" }}>o</span>
                <span style={{ color: "#FFCCCC" }}>t</span>
                <span style={{ color: "#FF0066" }}>o </span>
                Gallery
            </h1>
            <p>
                <a href="https://css-tricks.com/adaptive-photo-layout-with-flexbox/">
                    Details
                </a>
            </p>
            <ul>
                {imgData.map((val, i) => (
                    <li key={val.alt}>
                        <img
                            ref={(element) =>
                                i > initImageLoad &&
                                imgRef.current.push(element)
                            }
                            alt={val.alt}
                            src={i > initImageLoad ? null : val.src}
                            data-src={val.src}
                        />
                    </li>
                ))}
                {/* Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens! */}
                <li></li>
            </ul>
        </div>
    );
}

export default App;
