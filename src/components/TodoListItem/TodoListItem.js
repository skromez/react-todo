import React, { Component } from 'react';
import './TodoListItem.scss';

class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onExclamationClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
        onClick={this.onLabelClick}
      >
        {label}
      </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onDeleted}
          >
            <i className="fa fa-trash" />
          </button>
          <button onClick={this.onExclamationClick} type="button" className="btn btn-outline-success">
            <i className="fas fa-exclamation" />
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
