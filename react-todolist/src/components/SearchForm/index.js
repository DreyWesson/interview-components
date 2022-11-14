import React from "react";

export const SearchForm = ({ filterSearch, changeHandler }) => {
  return (
    <form action="" style={{ width: "100%" }}>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        onChange={changeHandler}
        className="inputbox"
      />
      <select
        name="category"
        onChange={changeHandler}
        value={filterSearch.category}
      >
        <option value="All">All</option>
        <option value="Domestic">Domestic</option>
        <option value="Official">Official</option>
        <option value="Casual">Casual</option>
      </select>
    </form>
  );
};
