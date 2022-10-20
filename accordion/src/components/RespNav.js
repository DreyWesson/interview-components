import React, { useEffect, useMemo, useState } from "react";
import "../App.css";
export const RespNav = () => {
    const [screen, setScreen] = useState(window.innerWidth);
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        const tmp = window.addEventListener("resize", () =>
            setScreen(() => window.innerWidth)
        );
        return () => window.removeEventListener("resize", tmp);
    }, []);

    const styling = useMemo(
        () => ({
            display: screen < 650 ? "block" : "flex",
            alignContent: "center",
            width: "100%",
        }),
        [screen]
    );

    return (
        <div style={{ position: "relative" }}>
            <ul
                style={{
                    display: "flex",
                    alignItems: "center",
                    listStyle: "none",
                    width: "100%",
                    margin: 0,
                    padding: "0 10px",
                    backgroundColor: "#000",
                    color: "#fff",
                    position: "absolute",
                }}
            >
                {screen < 650 && !menu ? (
                    <div
                        className="linkContainer"
                        style={{
                            display: "flex",
                            alignContent: "center",
                            width: "100%",
                        }}
                    >
                        <li className="list">Home</li>
                    </div>
                ) : (
                    <div className="linkContainer" style={styling}>
                        <li className="list">Home</li>
                        <li className="list">About</li>
                        <li className="list">Contact</li>
                        <li className="list">Blog</li>
                    </div>
                )}
                {screen < 650 ? (
                    <span className="menuIcon" onClick={() => setMenu(!menu)}>
                        #
                    </span>
                ) : (
                    ""
                )}
            </ul>
            <p style={{ paddingTop: "50px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis ipsa enim architecto fuga a aspernatur in accusantium
                impedit, temporibus, perferendis tempore. Impedit enim debitis,
                in id quisquam doloremque ipsum sint dolores autem aliquid
                cumque numquam tempora necessitatibus nemo, assumenda, facilis
                maxime quia distinctio sed iusto vitae voluptatem excepturi
                quae. Saepe, necessitatibus! Atque, nostrum dignissimos?
                Voluptatibus consectetur, alias dolorum reprehenderit neque
                dicta placeat. Eveniet delectus quis unde iure accusantium
                corrupti laborum harum animi maxime a rem iusto ipsam maiores
                quam sunt praesentium ducimus sit, autem magni odio, at quidem.
                Iure voluptates minima nulla mollitia, quam totam soluta
                quisquam tenetur perferendis reprehenderit aut aspernatur
                corrupti eos qui, cum numquam accusantium molestias aliquam
                error porro modi, in doloremque? Amet adipisci autem molestiae
                velit laboriosam? Debitis suscipit architecto perspiciatis odio,
                aut quaerat, inventore aspernatur libero nobis hic incidunt ex.
                Quasi nobis ipsa fugiat ut quod! Quas iure vitae, voluptates
                quidem fugit doloribus illo delectus ad distinctio dolor
                consequuntur molestiae dicta? In, consectetur fuga! Quae quo
                fuga consequuntur praesentium assumenda at amet rerum enim
                repudiandae excepturi, quos aliquam voluptas quia, dolor nam qui
                cumque minus dicta? Qui eaque perferendis corrupti enim eius
                nisi obcaecati, dolore commodi doloribus similique est nostrum
                officia. Iusto quas earum recusandae illum libero? Sapiente
                nostrum ad sint quia inventore. Quae iusto magni voluptas
                quibusdam, culpa tenetur adipisci quaerat praesentium laudantium
                totam ea, possimus incidunt voluptatum sint porro corrupti rem
                molestias non numquam sed beatae quod, illum nulla! Pariatur
                fugiat ipsum culpa quod quae aperiam molestiae consectetur?
                Excepturi, exercitationem quo obcaecati, veniam aliquam at
                debitis iure non incidunt in iste corporis quam eaque, rem
                repellat! Rerum autem quaerat, perferendis quam eligendi sequi
                similique, aliquid doloribus dolore numquam repellendus
                consequatur a, hic adipisci corporis id consectetur. Tempore
                neque dicta atque magnam quas iure sequi perspiciatis ratione
                dolorem et nam, nihil iusto odit eaque veritatis, saepe quia
                exercitationem id voluptas nemo nesciunt culpa inventore nulla
                blanditiis? Perferendis consequatur iure, consectetur officiis,
                sapiente, soluta qui totam ipsam ratione illo obcaecati est et
                ea nemo. Iste mollitia illo unde inventore! Delectus pariatur
                voluptas amet aperiam obcaecati fugiat commodi itaque inventore
                saepe sint vel totam assumenda ea placeat deserunt, soluta
                magnam praesentium hic quaerat quis unde, ex reprehenderit.
                Dolores, in tempora. Veritatis, delectus? Architecto, odio
                minus? Dignissimos atque temporibus, necessitatibus aut
                architecto tenetur eos voluptates error impedit. Expedita sint
                perspiciatis odit facere totam. Necessitatibus sapiente
                excepturi exercitationem ipsam minus dolorem cum? Obcaecati
                nihil mollitia, sequi, eius ullam debitis repudiandae animi
                veniam quaerat voluptate sed esse, quisquam velit distinctio
                error voluptates hic officiis veritatis ut earum! Facere
                deserunt corporis quam doloribus delectus labore, molestias
                ullam? Beatae nostrum praesentium consequuntur necessitatibus?
            </p>
        </div>
    );
};
