import React from "react";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./Search.css";

function Search() {
  const inputHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    // dispatch(searchByCity())
  };
  const searchHandler = (e) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div className="search-component">
      <div className="search-body">
        <label>Search</label>
        <Input onChange={(e) => inputHandler(e)} />
      </div>
      <div className="search-city">
        <Button onClick={searchHandler}>Search</Button>
      </div>
      <div className="add-city">
        <Button onClick={(e) => addHandler(e)}>Add</Button>
      </div>
    </div>
  );
}

export default Search;
