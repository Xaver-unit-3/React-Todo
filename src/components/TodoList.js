// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  console.log(props)
  return(
    <div>{props.task.map((singleTask) => (
      <Todo singleTask={singleTask}/> 
    ))}</div>
  )
}

export default TodoList;
