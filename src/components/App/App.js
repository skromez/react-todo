import React from 'react';
import './App.scss';
import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppHeader toDo="1" done="3" />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
