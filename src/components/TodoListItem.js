import React, { Component } from 'react';

class TodoListItem extends Component {

  state = {
    edit: false,
    isDone: this.props.isDone,
    text: this.props.text
  }

  changeStatus = () => {
    this.setState((prevState) => ({
      isDone: !prevState.isDone
    }));
  }

  handleClickEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit
    }));
  }

  render() {

    return (
      <div>
        <input type="checkbox" onChange={this.changeStatus} checked={this.state.isDone} />
        {
          this.state.edit ? <input type="text" value={this.props.text} /> : this.props.text
        }
        <button onClick={this.handleClickEdit}>edit</button>
      </div>
    )
  }
}

export default TodoListItem;