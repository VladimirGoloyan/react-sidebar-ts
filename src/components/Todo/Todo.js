import React, { useState, useRef} from "react";
import fbService from "api/service";

import Button from "@material-ui/core/button";

import "./Todo.scss";
import Input from "components/Input/Input";

const Todo = ({ title, completed, remove, item }) => {
  const inputRef = useRef()

  const [state,setState] = useState({
    complete:completed,
    edit:false,
    editTitle:title
  })

  const {complete, edit, editTitle} = state;

  const toggleComplete = () => {
    setState({...state, complete:!complete});
    const newItem = { ...item, completed: !complete };
    fbService.updateItem(newItem, "todos");
  };

  const updateTitle = () => {
    const newItem = { ...item, title:editTitle };
    fbService.updateItem(newItem, "todos");
    setState({...state, edit:!edit});
  }

  const setInput = () => {
    setState({...state, edit:!edit});
    setTimeout(()=>{
      inputRef.current.focus()
    },0)
  };
  
  const changeValue = (e) => {
    setState({...state,editTitle:e.target.value})
  }

  return (
    <div className="app-todo">
      <div className="app-todo__title">
       {edit ? <Input value={editTitle} onChange={changeValue} onBlur={updateTitle} focus={inputRef}/> : <p onClick={setInput}> { editTitle } </p>}
       </div> 
      <div className="app-todo__is-complete">
        <Button
          className={
            complete
              ? "app-todo__is-complete__complete"
              : "app-todo__is-complete__incomplete"
          }
          onClick={toggleComplete}
        >
          {complete ? "Complete" : "Incomplete"}
        </Button>
      </div>
      <div className="app-todo__delete">
        <Button className="app-todo__delete__button" onClick={remove}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Todo;
