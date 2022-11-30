import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const app = express();
app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.use("^/$", (req, res) => {
    fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
        if (err) return res.statusCode(500).send("Some error occurred");

        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        );

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
});

app.listen(3000, () => console.log("Listening..."));
