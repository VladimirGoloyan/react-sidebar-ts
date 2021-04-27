import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import todosReducer from "./todosReducer";

const initialState = {
  todos: null
};

export const store = createStore(
  todosReducer,
  initialState,
  applyMiddleware(reduxThunk)
);
