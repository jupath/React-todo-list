import React, { Component } from 'react';
import { Button } from 'reactstrap';

class TodoListHeader extends Component {

  handleDeleteAll = () => {
    this.props.deleteAll();
  }

  handleSetFilter = filter => {
    this.props.setFilter(filter);
  }

  render() {
    let items = this.props.itemsLeft();
    let activeFilter = this.props.activeFilter;

    return (
      <div className="todo-list__header py-3 px-2 mt-4">
        <div className="space-25">
          { items } item{ items !==1 && 's' } left
        </div>
        <div className="space-50 text-center">
          <Button
            color="primary"
            className="mx-1"
            disabled={activeFilter === undefined}
            onClick={() => this.handleSetFilter()}
          >
            All
          </Button>
          <Button
            color="primary"
            className="mx-1"
            disabled={activeFilter === 'active'}
            onClick={() => this.handleSetFilter('active')}
          >
            Active
          </Button>
          <Button
            color="primary"
            className="mx-1"
            disabled={activeFilter === 'done'}
            onClick={() => this.handleSetFilter('done')}
          >
            Done
          </Button>
        </div>
        <div className="space-25">
          <Button color="danger" className="float-right" onClick={this.handleDeleteAll} >Delete All</Button>
        </div>
      </div>
    );
  };
}

export default TodoListHeader;