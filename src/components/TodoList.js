import React, { Component } from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  render() {
    return (
      <div>
        <TodoListHeader />
        {
          this.props.todos.map(todo =>
            <TodoListItem
              {...todo}
              key={todo.id}
              deleteItemFromList={this.props.deleteItemFromList}
              editTodo={this.props.editTodo}
              changeStatus={this.props.changeStatus}
            />
          )
        }
      </div>
    );
  };
}

export default TodoList;