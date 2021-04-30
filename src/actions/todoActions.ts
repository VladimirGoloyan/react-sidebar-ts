import { actionTypesRedux } from "reducers/actionTypesRedux";
import type { AppDispatch } from "../reducers/store";
import fbService from "api/service";

export const setReduxTodos = () => (dispatch: AppDispatch) => {
  fbService
    .getAllItems("todos")
    .then((data) => {
      dispatch({
        type: actionTypesRedux.SET_TODOS,
        payload: {
          todos: data,
        },
      });
    })
    .catch((err) => {
      console.log("Caught an error : ", err);
    });
};

export const createReduxTodo = (todo: object) => (dispatch: AppDispatch) => {
  fbService.createItem(todo, "todos").then((data) => {
    dispatch({
      type: actionTypesRedux.CREATE_TODO,
      payload: {
        todo: data,
      },
    });
  });
};

export const deleteReduxTodo = (id: number) => (dispatch: AppDispatch) => {
  console.log("starting delete");
  fbService.deleteItem(id, "todos").then(() => {
    fbService.getAllItems("todos").then((data) => {
      dispatch({
        type: actionTypesRedux.SET_TODOS,
        payload: {
          todos: data,
        },
      });
    });
  });
};

export const updateReduxTodo = (newTodo: object) => (dispatch: AppDispatch) => {
  fbService.updateItem(newTodo, "todos").then((data) => {
    setReduxTodos();
    dispatch({
      type: actionTypesRedux.UPDATE_TODO,
      payload: {
        todo: data,
      },
    });
  });
};
