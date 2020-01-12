import React from 'react';
import './SearchPanel.scss';

const SearchPanel = ({ onChange }) => {
  return (
    <div className="search-panel">
      <input
        className="form-control"
        type="text"
        placeholder="type to search"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchPanel;
