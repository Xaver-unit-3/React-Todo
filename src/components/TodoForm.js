import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  submitTask = (e) => {
    e.preventDefault();
    this.props.addTask(e, this.state.newTask);
    this.setState({ newTask: ''});
  }

  render() {
    return(
      <form onSubmit={this.submitTask}>
      <input
        value={this.state.newTask}
        onchange={this.handleChange}
        type='text'
        name='task'
       /> 
       <button>Add Task</button>
      </form>
    )
  }
}

export default TodoForm;