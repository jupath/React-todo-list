import React, { Component } from 'react';

class EditTodoForm extends Component {

  state = {
    text: this.props.text,
    error: false
  }

  handleChangeText = event => {
    let text = event.target.value;
    this.setState({ text });
  }

  handleChangeTextSubmit = event => {
    event.preventDefault();
    const text = this.state.text;
    if( text === '' ) {
      this.setState({
        error: 'Please fill out the field!'
      });
    } else {
      this.props.handleEditTodo(text);
      this.setState({
        error: false
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleChangeTextSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChangeText} />
          <button>save</button>
        </form>
        { this.state.error && <p>{this.state.error}</p> }
      </div>
    )
  }
}

export default EditTodoForm;