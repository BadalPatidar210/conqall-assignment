import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  objectsDeleteReducer,
  objectsListReducer,
  shortlistedListReducer,
  shortlistedReducer,
} from "./reducers/objectsReducers";
import thunk from "redux-thunk";
const initialState = {};

const reducer = combineReducers({
  objectsList: objectsListReducer,
  updatedList: objectsDeleteReducer,
  shortlistedList: shortlistedListReducer,
  shortlist: shortlistedReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
