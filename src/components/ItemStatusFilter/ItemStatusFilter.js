import React, { Component } from 'react';
import './ItemStatusFilter.scss';

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];
  render() {

    const { status, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) =>
    {
      const isActive = status === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    }
  );

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
