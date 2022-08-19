import React, { useCallback, useEffect, useState } from "react";
import { Form } from "./components/Form";
import { SearchForm } from "./components/SearchForm";
import { Todos } from "./components/Todos";

// TODO:
// Delete Todos ✅
// or strike out todo ✅
// search Todos ✅
// group strike through and delete

const App = () => {
  const [filterSearch, setFilterSearch] = useState({
    search: "",
    category: "All",
  });
  const [checkBoxes, setCheckBoxes] = useState({});
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [dictionary, setDictionary] = useState({
    todo: "",
    category: "All",
    checked: false,
  });

  const handleCheckboxes = (e) => {
    setCheckBoxes({
      ...checkBoxes,
      [e.target.name]: e.target.checked,
    });
    Object.values(todoList).forEach((data) => {
      if (data.todo === e.target.name) {
        data.checked = data.checked === true ? false : true;
        localStorage.setItem("todo", JSON.stringify(todoList));
      }
    });
  };

  const formHandler = (event) => {
    const { name, value } = event.target;
    setDictionary((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const locale = JSON.parse(localStorage.getItem("todo"));
    locale
      ? setTodoList(() => ({ ...locale, [dictionary.todo]: dictionary }))
      : setTodoList(() => ({ [dictionary.todo]: dictionary }));
    setDictionary({ todo: "", category: "All", checked: false });
  };

  const searchHandler = (event) => {
    const { name, value } = event.target;
    setFilterSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFiltering = useCallback(
    () =>
      Object.values(todoList)
        .filter((val) =>
          filterSearch.category === "All"
            ? val.todo.includes(filterSearch.search)
            : val.category === filterSearch.category &&
              val.todo.includes(filterSearch.search)
        )
        .map((val) => val),
    [filterSearch, todoList]
  );

  const handleDelete = (todo) => {
    delete todoList[todo];
    setFilteredTodo(handleFiltering());
    localStorage.setItem("todo", JSON.stringify(todoList));
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    setFilteredTodo(handleFiltering());
  }, [handleFiltering]);

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
      <SearchForm changeHandler={searchHandler} filterSearch={filterSearch} />
      <Todos
        filteredTodos={filteredTodo}
        handleCheckboxes={handleCheckboxes}
        checkBoxes={checkBoxes}
        handleDelete={handleDelete}
      />
      <Form
        dictionary={dictionary}
        formHandler={formHandler}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
