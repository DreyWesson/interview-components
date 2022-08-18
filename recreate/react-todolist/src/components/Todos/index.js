import React from "react";

export const Todos = ({ filteredTodos, handleCheckboxes, checkBoxes }) => {
  // const [checkAll, setCheckAll] = useState(false);
  return (
    <div style={{ minHeight: "60vh" }}>
      {/* <form>
        <input
          type="checkbox"
          name="All"
          checked={checkAll}
          onChange={() => setCheckAll(!checkAll)}
        />
        <label htmlFor="All">All</label>
      </form> */}
      {filteredTodos.length > 0 &&
        filteredTodos.map((list, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                name={list.todo}
                checked={checkBoxes[list.checked] || false}
                onChange={handleCheckboxes}
              />
              <label htmlFor={list.todo}>
                {list.todo} : {list.category}
              </label>
            </div>
          );
        })}
    </div>
  );
};
