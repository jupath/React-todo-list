import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
        <TransitionGroup
            component="div"
            className="list"
        >
          {
            todos.map(todo =>
              <CSSTransition
                classNames="fade"
                timeout={1000}
                key={todo.id}
              >
                <TodoListItem
                  {...todo}
                  key={todo.id}
                  deleteItemFromList={this.props.deleteItemFromList}
                  editTodo={this.props.editTodo}
                  changeStatus={this.props.changeStatus}
                />
              </CSSTransition>
            )
          }
        </TransitionGroup>
      </div>
    );
  };
}

export default TodoList;