import React from "react";
import { ListNote } from "./components/ListNote";
import { useData } from "./useData";
import { usePageSwitcher } from "./usePageSwitcher";

const App = () => {
  const { data } = useData();
  const { page, pageHandler, handleNoteDisplay } = usePageSwitcher();

  return (
    <div className="container" style={{ width: "80%", margin: "0 auto" }}>
      <h1 style={{ color: "#485e69" }}>Sticky Note App</h1>
      <div>
        <ListNote
          lists={data}
          pageHandler={pageHandler}
          page={page}
          handleNoteDisplay={handleNoteDisplay}
        />
      </div>
    </div>
  );
};

export default App;
