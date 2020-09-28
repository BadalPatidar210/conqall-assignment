import { act } from "react-dom/test-utils";
import {
  OBJECTS_LIST_REQUEST,
  OBJECTS_LIST_SUCCESS,
  OBJECTS_LIST_FAIL,
  OBJECT_DELETE_SUCCESS,
  OBJECT_DELETE_REQUEST,
  OBJECT_DELETE_FAIL,
  SHORTLISTED_LIST_REQUEST,
  SHORTLISTED_LIST_SUCCESS,
  SHORTLISTED_LIST_FAIL,
  REMOVE_SHORTLISTED_REQUEST,
  REMOVE_SHORTLISTED_SUCCESS,
  REMOVE_SHORTLISTED_FAIL,
  SORTED_LIST_REQUEST,
  SORTED_LIST_SUCCESS,
  SORTED_LIST_FAIL,
  ADD_OBJECT_REQUEST,
  ADD_OBJECT_SUCCESS,
  ADD_OBJECT_FAIL,
} from "../constants/objectsConstant";
import {
  OBJECT_SHORTLIST_REQUEST,
  OBJECT_SHORTLIST_SUCCESS,
  OBJECT_SHORTLIST_FAIL,
} from "../constants/objectsConstant";

function objectsListReducer(state = { objects: [] }, action) {
  switch (action.type) {
    case OBJECTS_LIST_REQUEST:
      return { ...state, loading: true };
    case OBJECTS_LIST_SUCCESS:
      return { ...state, loading: false, objects: action.payload };
    case OBJECTS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function objectsDeleteReducer(state = { updatedObjects: [] }, action) {
  switch (action.type) {
    case OBJECT_DELETE_REQUEST:
      return { ...state, loadingDelete: true };
    case OBJECT_DELETE_SUCCESS:
      return {
        ...state,
        loadingDelete: false,
        updatedObjects: action.payload,
      };
    case OBJECT_DELETE_FAIL:
      return { ...state, loadingDelete: false, errorDelete: action.payload };
    default:
      return state;
  }
}

function shortlistedReducer(state = { shortlistedObjects: [] }, action) {
  switch (action.type) {
    case SHORTLISTED_LIST_REQUEST:
      return { ...state, loading: true };
    case SHORTLISTED_LIST_SUCCESS:
      return { ...state, loading: false, shortlistedObjects: action.payload };
    case SHORTLISTED_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function shortlistedListReducer(state = { shortlistedObjects: [] }, action) {
  switch (action.type) {
    case OBJECT_SHORTLIST_REQUEST:
      return { ...state, loadingShortlisted: true };
    case OBJECT_SHORTLIST_SUCCESS:
      return {
        ...state,
        loadingShortlisted: false,
        shortlistedObjects: action.payload,
      };
    case OBJECT_SHORTLIST_FAIL:
      return {
        ...state,
        loadingShortlisted: false,
        errorShortlisted: action.payload,
      };
    default:
      return state;
  }
}

function removeShortlistedReducer(
  state = { updatedShortlistedObjects: [] },
  action
) {
  switch (action.type) {
    case REMOVE_SHORTLISTED_REQUEST:
      return { ...state, loadingShortlisted: true };
    case REMOVE_SHORTLISTED_SUCCESS:
      return {
        ...state,
        loadingShortlisted: false,
        updatedShortlistedObjects: action.payload,
      };
    case REMOVE_SHORTLISTED_FAIL:
      return {
        ...state,
        loadingShortlisted: false,
        errorShortlisted: action.payload,
      };
    default:
      return state;
  }
}

function sortedListReducer(state = { sortedResultList: [] }, action) {
  switch (action.type) {
    case SORTED_LIST_REQUEST:
      return { ...state, loading: true };
    case SORTED_LIST_SUCCESS:
      console.log(action.payload);
      return { ...state, loading: false, sortedResultList: action.payload };
    case SORTED_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function addObjectReducer(state = { newObjectsList: [] }, action) {
  switch (action.type) {
    case ADD_OBJECT_REQUEST:
      return { ...state, loading: true };
    case ADD_OBJECT_SUCCESS:
      return { ...state, loading: false, newObjectsList: action.payload };
    case ADD_OBJECT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export {
  objectsListReducer,
  objectsDeleteReducer,
  shortlistedListReducer,
  shortlistedReducer,
  removeShortlistedReducer,
  sortedListReducer,
  addObjectReducer,
};
