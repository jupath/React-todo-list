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

  render() {
    return (
      <div>
        <Header />
        <TodoForm
          saveTodoToList={this.saveTodoToList}
        />
        <TodoList
          todos={this.state.todos}
        />
        <Footer />
      </div>
    );
  };
}

export default App;