import React, { useState } from "react";
import { Input } from "@material-ui/core";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { sortedResultList } from "../actions/objectActions";

function Search() {
  const sortedList = useSelector((state) => state.sortedList);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // const addHandler = (e) => {
  //   e.preventDefault();
  //   console.log(e.currentTarget);
  //   // dispatch(searchByCity())
  // };
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(sortedResultList(value));
    // console.log(value);
  };
  return (
    <div className="search-component">
      <form onSubmit={formHandler}>
        <div className="search-body">
          <label>Search</label>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="search-city">
          <Input type="submit" value="Submit" />
        </div>
      </form>
      {/* <div className="add-city">
        <Button onClick={(e) => addHandler(e)}>Add</Button>
      </div> */}
    </div>
  );
}

export default Search;
