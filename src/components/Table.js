import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  listObjects,
  deleteObject,
  shortlistObject,
} from "../actions/objectActions";
import "./Table.css";
function Table() {
  const objectsList = useSelector((state) => state.objectsList);
  const updatedList = useSelector((state) => state.updatedList);
  const newList = useSelector((state) => state.newList);
  const { newObjectsList } = newList;
  const { objects, loading, error } = objectsList;
  const dispatch = useDispatch();
  useEffect(() => {
    if (objects.length === 0) dispatch(listObjects());
    return () => {};
  }, []);
  useEffect(() => {
    objectsList.objects = newObjectsList;
  }, [newObjectsList]);

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteObject(e.target.id));
  };
  const shortlistHandler = (object) => {
    dispatch(shortlistObject(object));
  };

  return (
    <div className="table-component">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : updatedList ? (
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
            {objects.map((object, index) => (
              <tr key={index}>
                <td>{object.State}</td>
                <td>{object.District}</td>
                <td>{object.City}</td>
                <td>
                  <button
                    className="button"
                    onClick={() => shortlistHandler(object)}
                  >
                    Shortlist
                  </button>{" "}
                  <button
                    id={object.City}
                    className="button"
                    onClick={deleteHandler}
                  >
                    Delete
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

export default Table;
