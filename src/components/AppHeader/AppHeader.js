import React from 'react';
import './AppHeader.scss';

const AppHeader = ({ toDo, done }) => (
  <div className="app-header">
    <h1>My Todo List</h1>
    <p>{toDo} more to do, {done} done</p>
  </div>
);

export default AppHeader;
