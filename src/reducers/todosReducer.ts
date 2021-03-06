import { Action, Reducer } from "redux";
import { actionTypesRedux } from "./actionTypesRedux";
import { RootState } from "./store";

const reducer:Reducer<{ todos: Array<Object>; }, any> = (state:any, action) => {
  switch (action.type) {
    case actionTypesRedux.SET_TODOS:
      return {todos:action.payload.todos};

    case actionTypesRedux.UPDATE_TODO:
      return [...state.todos];

    case actionTypesRedux.CREATE_TODO:
      console.log('state before create-Todo',state)
      return {todos:[...state.todos, action.payload.todo]};

    case actionTypesRedux.DELETE_TODO:
      return state.todos.filter((el:object|any) => {
        return el.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export default reducer;
