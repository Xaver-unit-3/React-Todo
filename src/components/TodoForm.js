import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      newTask: e.target.value
    });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({ ...this.state, newTask: ''});
  };

  render() {
    return(
      <form onSubmit={this.submitTask}>
      <input
        value={this.state.newTask}
        onChange={this.handleChanges}
        type='text'
        name='task'
        id='input'
       /> 
       <button>Add Task</button>
      </form>
    )
  }
}

export default TodoForm;