import React from "react";

export const Form = ({ dictionary, formHandler, handleSubmit }) => (
  <div>
    <form action="">
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          placeholder="Input new todo"
          onChange={formHandler}
          value={dictionary.todo}
          className="inputboxtwo"
        />
      </label>
      <select
        name="category"
        onChange={formHandler}
        value={dictionary.category}
      >
        <option value="All">All</option>
        <option value="Domestic">Domestic</option>
        <option value="Official">Official</option>
        <option value="Casual">Casual</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
    </form>
  </div>
);
