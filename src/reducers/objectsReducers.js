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

export {
  objectsListReducer,
  objectsDeleteReducer,
  shortlistedListReducer,
  shortlistedReducer,
};
