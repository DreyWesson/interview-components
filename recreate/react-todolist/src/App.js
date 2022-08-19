import React, { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { SearchForm } from "./components/SearchForm";
import { Todos } from "./components/Todos";

// TODO:
// Delete Todos
// search Todos ✅
// group strike through and delete

const App = () => {
  const [filterSearch, setFilterSearch] = useState({
    search: "",
    category: "All",
  });
  const [checkBoxes, setCheckBoxes] = useState({});

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  const [dictionary, setDictionary] = useState({
    todo: "",
    category: "All",
    checked: false,
  });

  const formHandler = (event) => {
    const { name, value } = event.target;
    setDictionary((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleCheckboxes = (e) => {
    setCheckBoxes({
      ...checkBoxes,
      [e.target.name]: e.target.checked,
    });
    const locale = JSON.parse(localStorage.getItem("todo"));
    locale.forEach((data) => {
      if (data.todo === e.target.name) {
        data.checked = data.checked === true ? false : true;
        localStorage.setItem("todo", JSON.stringify(locale));
      }
    });
    // console.log(JSON.parse(localStorage.getItem("todo")));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const locale = JSON.parse(localStorage.getItem("todo"));
    locale
      ? setTodoList(() => ({ ...locale, [dictionary.todo]: dictionary }))
      : setTodoList(() => ({ [dictionary.todo]: dictionary }));
    setDictionary({ todo: "", category: "All", checked: false });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const searchHandler = (event) => {
    const { name, value } = event.target;
    setFilterSearch((prevState) => ({ ...prevState, [name]: value }));
  };
  const filteredTodo = Object.values(todoList)
    .filter((val) =>
      filterSearch.category === "All"
        ? val.todo.includes(filterSearch.search)
        : val.category === filterSearch.category &&
          val.todo.includes(filterSearch.search)
    )
    .map((val) => val);

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
