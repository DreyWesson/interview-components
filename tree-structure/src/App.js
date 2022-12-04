import React from "react";
import { FileStructure } from "./FileStructure/FileStructure";

const tree = {
    name: "pedigree",
    children: [
        { name: "node_modules", children: [{ name: "Joi" }] },
        { name: "package.json" },
    ],
};
const App = () => {
    return (
        <div className="container" style={{ height: "100vh", width: "100vw" }}>
            <FileStructure tree={tree} />
        </div>
    );
};

export default App;
