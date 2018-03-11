import React, { Component } from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  render() {
    let todos = this.props.filterTodos();
    return (
      <div className="todo-list">
        <TodoListHeader
          itemsLeft={this.props.itemsLeft}
          deleteAll={this.props.deleteAll}
          setFilter={this.props.setFilter}
          activeFilter={this.props.activeFilter}
        />
        {
          todos.map(todo =>
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