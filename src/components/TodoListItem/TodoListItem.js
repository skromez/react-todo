import React, { Component } from 'react';
import './TodoListItem.scss';

class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props;
    const style = {
      color: important ? 'dodgerblue' : 'black',
      fontWeight: important ? 700 : 400,
    };

    return (
      <div className="todo__item">
      <span
        className="todo-list-item"
        style={style}
      >
        {label}
      </span>
        <div>
          <button type="button" className="btn btn-outline-danger">
            <i className="fa fa-trash" />
          </button>
          <button type="button" className="btn btn-outline-success">
            <i className="fas fa-exclamation" />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
