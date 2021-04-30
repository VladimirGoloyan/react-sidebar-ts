import { createStore, applyMiddleware, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import todosReducer from "./todosReducer";

// const initialState = {
//   todos: null
// };

const initialState:Store | any = configureStore({
  reducer: {
    todos: Array,
  },
});

export const store = createStore(
  todosReducer,
  initialState,
  applyMiddleware(reduxThunk)
);

export type RootState = ReturnType<typeof initialState.getState>;
export type AppDispatch = typeof initialState.dispatch;
