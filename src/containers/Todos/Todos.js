import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setReduxTodos,
  updateReduxTodo,
  deleteReduxTodo,
} from "actions/todoActions";
import fbService from "api/service";

import Todo from "components/Todo/Todo";
import Counter from "components/Counter/Counter";
import Loader from "components/Loader/Loader";
import { Button } from "@material-ui/core";

import "./Todos.scss";

const Todos = (props) => {
  useEffect(() => {
    if(!props.todos)
      props.setReduxTodos();
  }, []);

  const resetTodos = () => {
    fbService.pushTodos();
  };

  const createTodo = () => {
    console.log('pushing history')
      props.history.push('/todo-create')
  }

  const deleteTodo = async (id) => {
    props.deleteReduxTodo(id);
  };

  const getRandom = () => {
    if (props.todos) {
      return Math.floor(Math.random() * props.todos.length);
    }
  };

  return (
    <>
      <div className="app-header">
        <div className="app-header__buttons">
          <Button onClick={resetTodos}> Reset todos </Button>
          <Button onClick={createTodo}> Create todo </Button>
          <Button onClick={() => deleteTodo(getRandom())}>Delete random</Button>
        </div>
        <div className="app-header__counter">
          <Counter count={props.todos && props.todos.length} />
        </div>
      </div>
      <div className="app-todos">
        {props.todos ? (
          <>
            {props.todos.map((el, key) => {
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
            })}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  setReduxTodos,
  updateReduxTodo,
  deleteReduxTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
