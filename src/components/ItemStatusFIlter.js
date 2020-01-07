import React from 'react';
import './ItemStatusFilter.scss';

const ItemStatusFilter = () => (
  <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <label className="btn filter-btn btn-secondary active">
      <input type="radio" name="options" id="option1" checked />
      All
    </label>
    <label className="btn filter-btn btn-secondary">
      <input type="radio" name="options" id="option2" />
      Active
    </label>
    <label className="btn filter-btn btn-secondary">
      <input type="radio" name="options" id="option3" />
      Done
    </label>
  </div>
);

export default ItemStatusFilter;
