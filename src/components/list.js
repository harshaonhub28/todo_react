import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = { display: 'All' };
  }

  render() {
    let list = [];
    let list_active = [];
    let list_inactive = [];

    const list_all = this.props.todos.map(todo => {
      if (!todo.isDone) {
        list_active.push(
          <li onClick={e => this.props.toggle(todo)} key={todo.id}>
            {todo.task}
          </li>
        );
        return (
          <li onClick={e => this.props.toggle(todo)} key={todo.id}>
            {todo.task}
          </li>
        );
      } else {
        list_inactive.push(
          <li onClick={e => this.props.toggle(todo)} key={todo.id}>
            <s> {todo.task} </s>
          </li>
        );
        return (
          <li onClick={e => this.props.toggle(todo)} key={todo.id}>
            <s> {todo.task} </s>
          </li>
        );
      }
    });

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
