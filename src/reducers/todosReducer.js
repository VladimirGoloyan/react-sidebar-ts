import { actionTypesRedux } from "./actionTypesRedux";

const reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypesRedux.SET_TODOS:
      console.log(action);
      return {todos:action.payload.todos};

    case actionTypesRedux.UPDATE_TODO:
      console.log(action);
      return [...state];

    case actionTypesRedux.CREATE_TODO:
      console.log(action);
      console.log('state before create-Todo',state)
      return {todos:[...state.todos, action.payload.todo]};

    case actionTypesRedux.DELETE_TODO:
      console.log(action);
      return state.filter((el) => {
        return el.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export default reducer;
