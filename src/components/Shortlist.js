import React, { useEffect } from "react";
import "./Shortlist.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeShortlistObject,
  listShorlistedObjects,
} from "../actions/objectActions";
function Shortlist() {
  const shortlistedList = useSelector((state) => state.shortlistedList);
  const sortedList = useSelector((state) => state.sortedList);
  const { loading, shortlistedObjects, error } = shortlistedList;
  const dispatch = useDispatch();
  useEffect(() => {
    if (shortlistedObjects.length === 0) listShorlistedObjects();
  }, []);
  const removeShortlistHandler = (object) => {
    dispatch(removeShortlistObject(object.City));
  };
  return (
    <div className="table-shortlist-component">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : shortlistedList ? (
        <table className="table-heading">
          <thead>
            <tr>
              <th>State</th>
              <th>District</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shortlistedObjects.map((object, index) => (
              <tr key={index}>
                <td>{object.State}</td>
                <td>{object.District}</td>
                <td>{object.City}</td>
                <td>
                  <button
                    id={object.City}
                    className="button"
                    onClick={() => removeShortlistHandler(object)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default Shortlist;
