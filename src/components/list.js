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
    let all_style = { backgroundColor: '' };
    let active_style = { backgroundColor: '' };
    let inactive_style = { backgroundColor: '' };

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
      all_style.backgroundColor = 'blue';
      active_style.backgroundColor = '';
      inactive_style.backgroundColor = '';
    } else if (this.state.display === 'Active') {
      list = list_active;
      all_style.backgroundColor = '';
      active_style.backgroundColor = 'blue';
      inactive_style.backgroundColor = '';
    } else if (this.state.display === 'Inactive') {
      list = list_inactive;
      all_style.backgroundColor = '';
      active_style.backgroundColor = '';
      inactive_style.backgroundColor = 'blue';
    }

    return (
      <div>
        <button
          onClick={() => this.setState({ display: 'All' })}
          style={all_style}
        >
          {' '}All{' '}
        </button>
        <button
          onClick={() => this.setState({ display: 'Active' })}
          style={active_style}
        >
          Active
        </button>
        <button
          onClick={() => this.setState({ display: 'Inactive' })}
          style={inactive_style}
        >
          Inactive
        </button>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default List;
