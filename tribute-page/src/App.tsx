import { useMemo } from "react";
import "./App.css";
import { List } from "./List";
import { data as seed } from "./seed";

function App() {
    const data = useMemo(() => seed, []);
    return (
        <div className="App">
            <main
                id="main"
                style={{
                    margin: "25px 10px",
                    backgroundColor: "#e6e6e6",
                    position: "relative",
                    padding: "30px 0",
                }}
            >
                <h1 id="title" style={{ fontSize: "2.5rem" }}>
                    Dr. Norman Borlaug
                </h1>
                <p>The man who saved a billion lives</p>
                <figure
                    id="img-div"
                    style={{
                        maxWidth: "100%",
                        backgroundColor: "white",
                        padding: "10px",
                    }}
                >
                    <img
                        id="image"
                        src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg"
                        alt="Dr. Norman Borlaug seen standing in Mexican wheat field with a group of biologists"
                        style={{
                            objectFit: "cover",
                            width: "72%",
                            maxWidth: "100%",
                        }}
                    />
                    <figcaption id="img-caption">
                        Dr. Norman Borlaug, third from the left, trains
                        biologists in Mexico on how to increase wheat yields -
                        part of his life-long war on hunger.
                    </figcaption>
                </figure>
                <section
                    id="tribute-info"
                    style={{
                        width: "55%",
                        margin: "0 auto",
                    }}
                >
                    <h3 id="headline">
                        Here's a time line of Dr. Borlaug's life:
                    </h3>
                    <ul>
                        {data.map((li, idx) => (
                            <List
                                year={li.year}
                                details={li.details}
                                key={idx}
                            />
                        ))}
                    </ul>
                    <blockquote
                        cite="http://news.rediff.com/report/2009/sep/14/pm-pays-tribute-to-father-of-green-revolution-borlaug.htm"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "17px",
                            textAlign: "start",
                        }}
                    >
                        <i>
                            "Borlaug's life and achievement are testimony to the
                            far-reaching contribution that one man's towering
                            intellect, persistence and scientific vision can
                            make to human peace and progress."
                        </i>
                        <cite>-- Indian Prime Minister Manmohan Singh</cite>
                    </blockquote>
                    <h3 style={{ fontSize: "16px" }}>
                        If you have time, you should read more about this
                        incredible human being on his{" "}
                        <a
                            id="tribute-link"
                            href="https://en.wikipedia.org/wiki/Norman_Borlaug"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Wikipedia entry
                        </a>
                        .
                    </h3>
                </section>
            </main>
        </div>
    );
}

export default App;
