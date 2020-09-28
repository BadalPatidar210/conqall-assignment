import {
  OBJECTS_LIST_REQUEST,
  OBJECTS_LIST_SUCCESS,
  OBJECTS_LIST_FAIL,
  OBJECT_DELETE_REQUEST,
  OBJECT_DELETE_SUCCESS,
  OBJECT_DELETE_FAIL,
  OBJECT_SHORTLIST_REQUEST,
  OBJECT_SHORTLIST_SUCCESS,
  OBJECT_SHORTLIST_FAIL,
  REMOVE_SHORTLIST_REQUEST,
  REMOVE_SHORTLIST_SUCCESS,
  REMOVE_SHORTLIST_FAIL,
  SHORTLISTED_LIST_REQUEST,
  SHORTLISTED_LIST_SUCCESS,
  SHORTLISTED_LIST_FAIL,
  SORTED_LIST_REQUEST,
  SORTED_LIST_SUCCESS,
  SORTED_LIST_FAIL,
  ADD_OBJECT_REQUEST,
  ADD_OBJECT_SUCCESS,
  ADD_OBJECT_FAIL,
} from "../constants/objectsConstant";
import axios from "axios";

const listObjects = () => async (dispatch) => {
  try {
    dispatch({ type: OBJECTS_LIST_REQUEST });
    const { data } = await axios.get(
      "https://api.jsonbin.io/b/5f6f36127243cd7e824413e1"
    );
    dispatch({ type: OBJECTS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: OBJECTS_LIST_FAIL, payload: error.message });
  }
};

const deleteObject = (objectId) => (dispatch, getState) => {
  try {
    const { objectsList, updatedList, shortlistedList } = getState();
    dispatch({ type: OBJECT_DELETE_REQUEST, payload: objectId });
    let tempList = objectsList.objects.filter((elem) => {
      return elem.City !== objectId;
    });
    let uList = shortlistedList.shortlistedObjects.filter((elem) => {
      return elem.City !== objectId;
    });
    updatedList.updatedObjects = tempList;
    shortlistedList.shortlistedObjects = uList;
    objectsList.objects = tempList;
    dispatch({
      type: OBJECT_DELETE_SUCCESS,
      payload: [
        objectsList.objects,
        shortlistedList.shortlistedObjects,
        updatedList.updatedObjects,
      ],
    });
  } catch (error) {
    dispatch({ type: OBJECT_DELETE_FAIL, payload: error.message });
  }
};

const shortlistObject = (object) => (dispatch, getState) => {
  try {
    const { objectsList, shortlistedList } = getState();
    dispatch({ type: OBJECT_SHORTLIST_REQUEST, payload: object });
    objectsList.objects.map((elem) => {
      if (elem === object)
        if (!shortlistedList.shortlistedObjects.includes(elem))
          shortlistedList.shortlistedObjects.push(elem);
    });
    dispatch({
      type: OBJECT_SHORTLIST_SUCCESS,
      payload: shortlistedList.shortlistedObjects,
    });
  } catch (error) {
    dispatch({ type: OBJECT_SHORTLIST_FAIL, payload: error.message_ });
  }
};

const listShorlistedObjects = () => (dispatch, getState) => {
  try {
    const { shortlistedList } = getState();
    dispatch({ type: SHORTLISTED_LIST_REQUEST });
    dispatch({
      type: SHORTLISTED_LIST_SUCCESS,
      payload: shortlistedList.shortlistedObjects,
    });
  } catch (error) {
    dispatch({ type: SHORTLISTED_LIST_FAIL, payload: error.message });
  }
};

const removeShortlistObject = (objectId) => (dispatch, getState) => {
  try {
    const { shortlistedList } = getState();
    dispatch({ type: REMOVE_SHORTLIST_REQUEST, payload: objectId });
    let data = shortlistedList.shortlistedObjects.filter((elem) => {
      return elem.City !== objectId;
    });
    shortlistedList.shortlistedObjects = data;
    dispatch({
      type: REMOVE_SHORTLIST_SUCCESS,
      payload: shortlistedList.shortlistedObjects,
    });
  } catch (error) {
    dispatch({ type: REMOVE_SHORTLIST_FAIL, error: error.message });
  }
};

const sortedResultList = (value) => (dispatch, getState) => {
  try {
    const { objectsList } = getState();
    dispatch({ type: SORTED_LIST_REQUEST, payload: value });
    const tempList = objectsList.objects.filter((elem) => {
      return elem.City === value;
    });
    objectsList.objects = tempList;
    dispatch({ type: SORTED_LIST_SUCCESS, payload: objectsList.objects });
  } catch (error) {
    dispatch({ type: SORTED_LIST_FAIL, error: error.message });
  }
};

const addObject = (sName, dName, cName) => (dispatch, getState) => {
  try {
    const { objectsList } = getState();
    dispatch({ type: ADD_OBJECT_REQUEST, payload: [sName, dName, cName] });
    objectsList.objects.unshift({
      District: dName,
      State: sName,
      City: cName,
    });
    dispatch({ type: ADD_OBJECT_SUCCESS, payload: objectsList.objects });
  } catch (error) {
    dispatch({ type: ADD_OBJECT_FAIL, error: error.message });
  }
};
export {
  listObjects,
  deleteObject,
  shortlistObject,
  removeShortlistObject,
  listShorlistedObjects,
  sortedResultList,
  addObject,
};
