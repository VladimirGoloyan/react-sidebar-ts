import React, {useState} from 'react'
import { connect } from "react-redux";
import {
    createReduxTodo
  } from "actions/todoActions";

import Input  from 'components/Input/Input'
import {Button} from '@material-ui/core'

import './CreatePage.scss'
const CreatePage = (props) => {
    const [title,setTitle] = useState('');

    const changeTitle = (e) =>{
        setTitle(e.target.value);
    }

    const createTodo = () =>{
        const newTodo = {
            title: title,
            completed: false,
          };
        props.createReduxTodo(newTodo)
        props.history.push('/todo-list')
    }
    
    return (
        <div className='app-todo-create'>
            <div className='app-todo-create__form'>
                <Input title={title} onChange={changeTitle}/>
                <Button onClick={createTodo}>Create</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    };
  };
  
  const mapDispatchToProps = {
    createReduxTodo,
  };

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage)
