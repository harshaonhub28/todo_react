import React, { Component } from 'react';

import './App.css';

import Form from './components/form';
import List from './components/list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
    this.onInput = this.onInput.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div>
        Hola!
        <Form onInput={this.onInput} />
        <List todos={this.state.todos} toggle={this.toggle} />
      </div>
    );
  }

  onInput(task, isDone, id) {
    const todos = this.state.todos.concat([
      {
        task: task,
        isDone: isDone,
        id: id
      }
    ]);
    this.setState({ todos });
  }

  toggle(todo) {
    todo.isDone = !todo.isDone;

    const newTodos = this.state.todos.map(t => {
      if (t.id === todo.id) return todo;
      else return t;
    });

    this.setState({ todos: newTodos });
  }
}

export default App;
