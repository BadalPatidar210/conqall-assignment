import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  objectsDeleteReducer,
  objectsListReducer,
  shortlistedListReducer,
  shortlistedReducer,
  removeShortlistedReducer,
  sortedListReducer,
} from "./reducers/objectsReducers";
import thunk from "redux-thunk";
const initialState = {};

const reducer = combineReducers({
  objectsList: objectsListReducer,
  updatedList: objectsDeleteReducer,
  shortlistedList: shortlistedListReducer,
  shortlist: shortlistedReducer,
  updatedShortlistedList: removeShortlistedReducer,
  sortedList: sortedListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
