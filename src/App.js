import React, { Component } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {

  state = {
    todos: []
  }

  saveTodoToList = todo => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        todo
      ]
    }));
  }

  deleteItemFromList = id => {
    const todos = this.state.todos.filter( todo => todo.id !== id );
    this.setState({todos});
  }

  editTodo = todo => {
    const {id, text} = todo;
    const todos = this.state.todos.map(todo => todo.id === id ? ({...todo, text}) : todo );
    this.setState({todos});
  }

  changeStatus = todo => {
    const {id, isDone} = todo;
    const todos = this.state.todos.map(todo => todo.id === id ? ({...todo, isDone}) : todo );
    this.setState({todos});
  }

  render() {
    return (
      <div>
        <Header />
        <TodoForm
          saveTodoToList={this.saveTodoToList}
        />
        <TodoList
          todos={this.state.todos}
          deleteItemFromList={this.deleteItemFromList}
          editTodo={this.editTodo}
          changeStatus={this.changeStatus}
        />
        <Footer />
      </div>
    );
  };
}

export default App;