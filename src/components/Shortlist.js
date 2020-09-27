import React, { useEffect } from "react";
import "./Table.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeShortlistObject,
  listShorlistedObjects,
} from "../actions/objectActions";
function Shortlist() {
  const shortlistedList = useSelector((state) => state.shortlistedList);
  const shortlist = useSelector((state) => state.shortlist);
  const { loading, shortlistedObjects, error } = shortlistedList;
  const dispatch = useDispatch();
  useEffect(() => {
    listShorlistedObjects();
  }, []);
  const removeShortlistHandler = (object) => {
    dispatch(removeShortlistObject(object.City));
  };
  return (
    <div className="table-component">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : shortlistedObjects ? (
        <table className="table">
          <thead>
            <tr>
              <th>State</th>
              <th>District</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shortlistedObjects.map((object) => (
              <tr key={object._id}>
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
