import React from 'react';

const List = ({ todos, toggle }) => {
  const list = todos.map(todo => {
    if (!todo.isDone) {
      return <li onClick={e => toggle(todo)}>{todo.task}</li>;
    } else {
      return <li onClick={e => toggle(todo)}><s> {todo.task} </s></li>;
    }
  });

  return <ul>{list}</ul>;
};

export default List;
