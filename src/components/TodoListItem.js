import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';

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
      element = <span>{this.props.text}<button onClick={this.handleClickEdit} disabled={this.props.isDone}>edit</button></span>
    }

    return (
      <div>
        <input type="checkbox" onChange={this.handleChangeStatus} checked={this.props.isDone} />
        { element }
        <button onClick={this.handleClickDelete}>delete</button>
      </div>
    )
  }
}

export default TodoListItem;