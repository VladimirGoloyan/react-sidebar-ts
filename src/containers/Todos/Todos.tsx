import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setReduxTodos, deleteReduxTodo } from "actions/todoActions";
import type { RootState } from "reducers/store";
import fbService from "api/service";

import Todo from "containers/Todo/Todo";
import Counter from "components/Counter/Counter";
import Loader from "components/Loader/Loader";
import { Button } from "@material-ui/core";

import "./Todos.scss";

// interface ITodosProps{
//   todos:Array<{id:number,title:string,completed:boolean}>,
//   setReduxTodos:()=>void,
//   deleteReduxTodo:(id:number)=>void,
//   history:{push:(s:string)=>void}
// }

//any type given to props to prevent app crash in line 97

const Todos = (props: any) => {
  useEffect(() => {
    if (!props.todos) props.setReduxTodos();
  }, [props]);

  const resetTodos = () => {
    fbService.pushTodos();
  };

  const createTodo = () => {
    props.history.push("/todo-create");
  };

  const deleteTodo = async (id: number | any) => {
    props.deleteReduxTodo(id);
  };

  const getRandom = () => {
    if (props.todos) {
      return Math.floor(Math.random() * props.todos.length);
    }
  };

  return (
    <>
      <div className="app-todos-header">
        <div className="app-todos-header__buttons">
          <Button
            onClick={resetTodos}
            className="app-todos-header__buttons__reset"
          >
            {" "}
            Reset todos{" "}
          </Button>
          <Button
            onClick={createTodo}
            className="app-todos-header__buttons__create"
          >
            {" "}
            Create todo{" "}
          </Button>
          <Button
            onClick={() => deleteTodo(getRandom())}
            className="app-todos-header__buttons__del-rand"
          >
            Delete random
          </Button>
        </div>
        <div className="app-todos-header__counter">
          <Counter count={props.todos && props.todos.length} />
        </div>
      </div>
      <div className="app-todos">
        {props.todos ? (
          <>
            {props.todos.map(
              (
                el: { id: number; title: string; completed: boolean },
                key: string
              ) => {
                return (
                  <Todo
                    key={el.id}
                    item={el}
                    title={el.title}
                    completed={el.completed}
                    className="app-todos__list__item"
                    remove={() => deleteTodo(el.id)}
                  />
                );
              }
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  setReduxTodos,
  deleteReduxTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
