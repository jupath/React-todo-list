import React, { Component } from 'react';

class TodoListHeader extends Component {

  handleDeleteAll = () => {
    this.props.deleteAll();
  }

  handleSetFilter = filter => {
    this.props.setFilter(filter);
  }

  render() {
    let items = this.props.itemsLeft();
    return (
      <div>
        { items } item{ items !==1 && 's' } left
        <button onClick={() => this.handleSetFilter()}>All</button>
        <button onClick={() => this.handleSetFilter('active')}>Active</button>
        <button onClick={() => this.handleSetFilter('done')}>Done</button>
        <button onClick={this.handleDeleteAll} >Delete All</button>
      </div>
    );
  };
}

export default TodoListHeader;