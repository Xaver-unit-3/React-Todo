import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const task = [
  {
    task: 'Set up Todo list',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task
    };
  }

  addTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      task: [...this.state.task, newTask]
    })
  };

  toggleTask = (taskId) => {
    this.setState({
      ...this.state,
      task: this.state.task.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task
        }
      })
    });
  };

  clearTask = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      task: this.state.task.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList 
          task={this.state.task}
          toggleTask={this.toggleTask}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
