import React from "react";
import { Form } from "./components/Form";
import { ListNote } from "./components/ListNote";
import { OpenNote } from "./components/OpenNote";
import { useData } from "./useData";
import { usePageSwitcher } from "./usePageSwitcher";

const App = () => {
    const { data, handleSubmit } = useData();
    const { page, pageHandler, id, handleNoteDisplay } = usePageSwitcher();

    return (
        <div className="container" style={{ width: "80%", margin: "0 auto" }}>
            <h1>Note App</h1>
            <div style={{ display: "flex" }}>
                <ListNote
                    lists={data}
                    pageHandler={pageHandler}
                    page={page}
                    handleNoteDisplay={handleNoteDisplay}
                />
                <div style={{ flexGrow: "1", flex: "1" }}>
                    {page ? (
                        <OpenNote note={id} />
                    ) : (
                        <Form handleSubmit={handleSubmit} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
