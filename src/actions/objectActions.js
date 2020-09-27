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
    const { objectsList } = getState();
    dispatch({ type: OBJECT_DELETE_REQUEST, payload: objectId });
    let tempList = objectsList.objects.filter((elem) => {
      return elem.City !== objectId;
    });
    objectsList.objects = tempList;
    dispatch({ type: OBJECT_DELETE_SUCCESS, payload: objectsList.objects });
  } catch (error) {
    dispatch({ type: OBJECT_DELETE_FAIL, payload: error.message });
  }
};

const shortlistObject = (object) => (dispatch, getState) => {
  try {
    const { objectsList, shortlistedList } = getState();
    console.log(shortlistedList);
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
    console.log(shortlistedList.shortlistedObjects);
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
    // console.log(data + "daata mila");
    shortlistedList.shortlistedObjects = data;
    dispatch({
      type: REMOVE_SHORTLIST_SUCCESS,
      payload: shortlistedList.shortlistedObjects,
    });
  } catch (error) {
    dispatch({ type: REMOVE_SHORTLIST_FAIL, error: error.message });
  }
};
export {
  listObjects,
  deleteObject,
  shortlistObject,
  removeShortlistObject,
  listShorlistedObjects,
};
