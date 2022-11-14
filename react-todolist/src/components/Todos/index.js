import React from "react";
import { AiFillDelete } from "react-icons/ai";
export const Todos = ({
  filteredTodos,
  handleCheckboxes,
  checkBoxes,
  handleDelete,
}) => {
  // const [checkAll, setCheckAll] = useState(false);
  // console.log(filteredTodos);
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
      {Object.values(filteredTodos).map((list, i) => {
        return (
          <div
            key={i}
            className={list.checked ? "strike" : ""}
            style={{ display: "flex" }}
          >
            <input
              type="checkbox"
              name={list.todo}
              checked={checkBoxes[list.todo] || false || list.checked}
              onChange={handleCheckboxes}
            />
            <label
              htmlFor={list.todo}
              style={{ flex: 1, textAlign: "start", marginLeft: "20px" }}
            >
              <span>{list.category}</span> : <span>{list.todo}</span>
            </label>
            <AiFillDelete
              size={20}
              color={"grey"}
              onClick={() => handleDelete(list.todo)}
            />
          </div>
        );
      })}
    </div>
  );
};
