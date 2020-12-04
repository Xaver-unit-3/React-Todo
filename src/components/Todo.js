import React from 'react';

const Todo = (props) => {
  return(
    <div
      className={`item${props.singleTask.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTask(props.singleTask.id)}>
    <p>{props.singleTask.task}</p>
    </div>
  );
};

export default Todo;