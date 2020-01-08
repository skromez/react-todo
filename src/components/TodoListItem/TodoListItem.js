import React, { Component } from 'react';
import './TodoListItem.scss';

class TodoListItem extends Component {
  render() {
    const {
      label, onDeleted, onToggleDone, onToggleImportant, important, done,
    } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <div className="todo__item">
      <span
        className={classNames}
        onClick={onToggleDone}
      >
        {label}
      </span>
        <div>
          <button
            type="button"
            className="btn todo-item-btn btn-outline-danger"
            onClick={onDeleted}
          >
            <i className="fa fa-trash" />
          </button>
          <button onClick={onToggleImportant} type="button" className="todo-item-btn btn btn-outline-success">
            <i className="fas fa-exclamation" />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
