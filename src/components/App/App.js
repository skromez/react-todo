import React, { Component } from 'react';
import './App.scss';
import TodoList from '../TodoList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';

class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader toDo="1" done="3" />
        <SearchPanel />
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
        />
      </div>
    );
  }
};

export default App;