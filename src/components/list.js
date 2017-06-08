import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = { display: 'All' };
  }

  render() {
    const list_all = this.props.todos.map(todo => {
      if (!todo.isDone) {
        return <li onClick={e => this.props.toggle(todo)}>{todo.task}</li>;
      } else {
        return (
          <li onClick={e => this.props.toggle(todo)}><s> {todo.task} </s></li>
        );
      }
    });

    const list_active = this.props.todos.filter(todo => todo.isDone);
    const list_inactive = this.props.todos.filter(todo => !todo.isDone);

    let list = [];

    if (this.state.display === 'All') {
      list = list_all;
    } else if (this.state.display === 'Active') {
      list = list_active;
    } else {
      list = list_inactive;
    }

    return (
      <div>
        <button onClick={() => this.setState({ display: 'All' })}> All </button>
        <button onClick={() => this.setState({ display: 'Active' })}>
          {' '}Active{' '}
        </button>
        <button onClick={() => this.setState({ display: 'Inactive' })}>
          {' '}Inactive{' '}
        </button>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default List;
