import React from 'react';

import {TodoItem} from './TodoItem';

export const TodoList = (props) => (
  <div className="Todo-list">
    <ul>
      { props.todos.map(todo =>
        <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo}
          handleRemove={props.handleRemove} />) }
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
};
