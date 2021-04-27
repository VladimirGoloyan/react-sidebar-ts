import { actionTypesRedux } from "reducers/actionTypesRedux";

import fbService from "api/service";

export const setReduxTodos = () => (dispatch) => {
  fbService
    .getAllItems('todos')
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


export const createReduxTodo = (todo) => (dispatch) => {
  fbService.createItem(todo, "todos").then((data) => {
    dispatch({
      type: actionTypesRedux.CREATE_TODO,
      payload: {
        todo: data,
      },
    });
  });
};

export const deleteReduxTodo = (id) => (dispatch) => {
  console.log('starting delete')
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

export const updateReduxTodo = (newTodo) => (dispatch, getState) => {
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

