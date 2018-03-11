import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';
import { Button } from 'reactstrap';

class TodoListItem extends Component {

  state = {
    edit: false
  }

  handleChangeStatus = () => {
    const isDone = !this.props.isDone;
    const todo = {
      id: this.props.id,
      isDone
    }
    this.props.changeStatus(todo);
  }

  handleClickEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit
    }));
  }

  handleClickDelete = () => {
    this.props.deleteItemFromList(this.props.id);
  }

  handleEditTodo = text => {
    const todo = {
      id: this.props.id,
      text
    }
    this.props.editTodo(todo);
    this.setState({
      edit: false
    });
  }

  render() {

    let element;
    if (this.state.edit) {
      element = <EditTodoForm text={this.props.text} handleEditTodo={this.handleEditTodo} />;
    } else {
      element = <div className="todo-list__content">
          <label className="checkbox-wrapper">
            <span className={this.props.isDone ? 'done' : ''}>{this.props.text}</span>
            <input type="checkbox" id={this.props.id} className="mr-2" checked={this.props.isDone} onChange={this.handleChangeStatus} />
            <span className="checkmark"></span>
          </label>
          <Button color="primary" onClick={this.handleClickEdit} disabled={this.props.isDone}>edit</Button>
        </div>
    }

    return (
      <div className="todo-list__item py-3">
        <div>
          { element }
        </div>
        <Button color="danger" className="ml-1" onClick={this.handleClickDelete}>delete</Button>
      </div>
    )
  }
}

export default TodoListItem;