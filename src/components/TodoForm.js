import React, { Component } from 'react';
import uuid from 'uuid';

class TodoForm extends Component {

  state = {
    error: false
  }

  saveTodo = event => {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;

    if (text === '') {
      this.setState({
        error: 'Please, fill out the form!'
      });
    } else {
      const todo = {
        id: uuid(),
        text,
        isDone: false
      }
      this.props.saveTodoToList(todo);
      this.setState({
        error: false
      });
      event.target.elements.addTodo.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.saveTodo}>
          <input type="text" name="addTodo" />
          <button>Save</button>
        </form>
        { this.state.error && <p>{ this.state.error }</p> }
      </div>
    );
  };
}

export default TodoForm;