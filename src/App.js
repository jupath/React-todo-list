import React, { Component } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {

  state = {
    todos: [],
    filter: undefined
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('todos');
      const todos = JSON.parse(json);
      if(todos) {
        this.setState({todos})
      }
    } catch(e) {
      console.error('Error: ', e);
    }
  }

  componentDidUpdate() {
    const json = JSON.stringify(this.state.todos);
    localStorage.setItem('todos', json);
  }

  filterTodos = () => {
    let filter = this.state.filter;
    if( filter === undefined ) {
      return this.state.todos;
    } else if( filter === 'active' ) {
      const todos = this.state.todos.filter(todo => todo.isDone === false);
      return todos;
    } else if( filter === 'done' ) {
      const todos = this.state.todos.filter(todo => todo.isDone === true);
      return todos;
    } else {
      return this.state.todos;
    }
  }

  setFilter = filter => {
    this.setState({ filter });
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

  itemsLeft = () => {
    const items = this.state.todos.filter(todo => todo.isDone === false).length;
    return items;
  }

  deleteAll = () => {
    this.setState({ todos: [] })
  }

  render() {
    return (
      <div className="container px-lg-7">
        <Header />
        <TodoForm
          saveTodoToList={this.saveTodoToList}
        />
        <TodoList
          filterTodos={this.filterTodos}
          setFilter={this.setFilter}
          deleteItemFromList={this.deleteItemFromList}
          editTodo={this.editTodo}
          changeStatus={this.changeStatus}
          itemsLeft={this.itemsLeft}
          deleteAll={this.deleteAll}
          activeFilter={this.state.filter}
        />
        <Footer />
      </div>
    );
  };
}

export default App;