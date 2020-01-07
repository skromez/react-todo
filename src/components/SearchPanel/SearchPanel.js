import React from 'react';
import ItemStatusFilter from '../ItemStatusFilter';
import './SearchPanel.scss';

const SearchPanel = () => {

  return (
    <div className="search-panel">
      <input
        className="form-control"
        type="text"
        placeholder="type to search"
      />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
